import { IQuantity } from "../lib/quantity";
import { massConversions } from "../mass/mass-conversions";
import { volumeConversions } from "../volume/volume-conversions";
import { energyConversions } from "../energy/energy-conversions";
import { distanceConversions } from "../distance/distance-conversions";

export function parse(value: string, options?: {
    type?: string,
    locales?: string | string[],
}): IQuantity {
    const matches: any = value.trim()
    .match(/(?<quantity>[\d\.,]+)\s*(?<unit>.+)/i);
    if (!matches || Object.keys(matches.groups).length !== 2) {
        throw new Error("Expected value to start with a numeric string and ending with a unit");
    }
    const quantity = normaliseNumber(matches.groups.quantity, options && options.locales);
    if (isNaN(quantity)) {
        throw new Error(`Failed to parse numeric value parseFloat(${matches.groups.quantity}) was ${quantity}`);
    }
    const unit = matches.groups.unit;
    const type = (options && options.type) || guessType(unit);
    if (!unitIsOfType(type, unit)) {
        throw new Error(`${unit} is not a unit of ${type}`);
    }
    return { type, quantity, unit };
}

function unitIsOfType(type: string, unit: string): boolean {
    switch (type) {
        case "mass":
            return massConversions.hasOwnProperty(unit);
        case "volume":
            return volumeConversions.hasOwnProperty(unit);
        case "energy":
            return energyConversions.hasOwnProperty(unit);
        case "distance":
            return distanceConversions.hasOwnProperty(unit);
        case "density":
            if (unit.indexOf("/") <= -1) {
                return false;
            }
            const [massUnit, volumeUnit] = unit.split("/");
            return unitIsOfType("mass", massUnit) && unitIsOfType("volume", volumeUnit);
        default:
            throw new Error(`Unsupported or invalid quantity type ${type}`);
    }
}

function guessType(unit: string) {
    const types = ["mass", "volume", "energy", "distance", "density"];
    const candidates = types.filter((type) => unitIsOfType(type, unit));
    if (candidates.length > 1) {
        // tslint:disable-next-line:no-console
        console.warn(`Multiple candidates for ${unit} [${candidates.join(",")}]`);
    }
    return candidates[0];
}

function getLocaleInfo(locales?: string | string[]): { thousands: string, decimal: string } {
    if (!locales) {
        return { thousands: ",", decimal: "." };
    }
    const formatted: string = (Intl && Intl.NumberFormat(locales).format(1000.02)) || "1,000.02";
    return {
        thousands: (String as any).fromCodePoint((formatted as any).codePointAt(1)),
        decimal: (String as any).fromCodePoint((formatted as any).codePointAt(5)),
    };
}

function normaliseNumber(num: string, locales?: string | string[]): number {
    const localeInfo = getLocaleInfo(locales);
    return parseFloat(num.split(localeInfo.thousands).join("")
        .split(localeInfo.decimal).join("."));
}

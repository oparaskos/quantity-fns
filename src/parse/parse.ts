import { IQuantity } from "../lib/quantity";
import { massConversions } from "../mass/mass-conversions";
import { volumeConversions } from "../volume/volume-conversions";
import { energyConversions } from "../energy/energy-conversions";

export function parse(value: string, options?: {
    type?: string,
    thousandsSeperator?: string,
    decimalPlace?: string }): IQuantity {

    const decimalPlace = (options && options.decimalPlace) || ".";
    const thousandsSeperator = (options && options.thousandsSeperator) || ",";
    const matches: any = replaceAll(value.trim(), thousandsSeperator, "")
        .match(/(?<quantity>[\d\.,]+)\s*(?<unit>.+)/i);
    if (!matches || Object.keys(matches.groups).length !== 2) {
        throw new Error("Expected value to start with a numeric string and ending with a unit");
    }
    const fixDecimal = replaceAll(matches.groups.quantity, decimalPlace, ".");
    const v = parseFloat(fixDecimal);
    if (isNaN(v)) {
        throw new Error(`Failed to parse numeric value parseFloat(${matches.groups.quantity}) was ${v}`);
    }
    const unit = matches.groups.unit;
    const t = (options && options.type) || guessType(unit);
    if (!isUnitOf(t, unit)) {
        throw new Error(`${unit} is not a unit of ${t}`);
    }
    return {
        type: t,
        quantity: v,
        unit,
    };
}

function replaceAll(str: string, search: string, replacement: string): string {
    function reEscape(toEscape: string): string {
        return "\\" + toEscape.split("").join("\\");
    }
    return str.replace(new RegExp(reEscape(search), "ig"), replacement);
}

function isUnitOf(type: string, unit: string) {
    switch (type) {
        case "mass":
            return massConversions.hasOwnProperty(unit);
        case "volume":
            return volumeConversions.hasOwnProperty(unit);
        case "energy":
            return energyConversions.hasOwnProperty(unit);
        default:
            throw new Error(`Unsupported or invalid quantity type ${type}`);
    }
}

function guessType(unit: string) {
    const types = ["mass", "volume", "energy"];
    const candidates = types.filter((type) => isUnitOf(type, unit));
    if (candidates.length > 1) {
        // tslint:disable-next-line:no-console
        console.warn(`Multiple candidates for ${unit} [${candidates.join(",")}]`);
    }
    return candidates[0];
}

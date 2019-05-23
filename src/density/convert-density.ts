import { IQuantity } from "../lib/quantity";
import { factorConvert } from "../lib/factor-convert";
import { findConversionFactor as findMassConversionFactor } from "../mass/mass-conversions";
import { findConversionFactor as findVolumeConversionFactor } from "../volume/volume-conversions";

function findConversionFactor(unit: string): number {
    const massUnit = unit.split("/")[0];
    const volumeUnit = unit.split("/")[1];
    return findMassConversionFactor(massUnit) / findVolumeConversionFactor(volumeUnit);
}
export function convert(input: IQuantity, targetUnits: string): IQuantity {
    return {
        quantity: factorConvert(input.quantity,
            findConversionFactor(input.unit),
            findConversionFactor(targetUnits)),
        unit: targetUnits,
        type: "density",
    };
}

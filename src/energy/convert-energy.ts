import { IQuantity } from "../lib/quantity";
import { factorConvert } from "../lib/factor-convert";
import { findConversionFactor } from "./energy-conversions";

export function convert(input: IQuantity, targetUnits: string): IQuantity {
    return {
        quantity: factorConvert(input.quantity,
            findConversionFactor(input.unit),
            findConversionFactor(targetUnits)),
        unit: targetUnits,
        type: "energy",
    };
}

import { IQuantity } from "./quantity";
import { findConversionFactor } from "./mass-conversions";

export function convert(input: IQuantity, targetUnits: string): IQuantity {
    return {
        quantity:
            (input.quantity * findConversionFactor(input.unit))
            * 1 / findConversionFactor(targetUnits),
        unit: targetUnits,
        type: "mass",
    };
}

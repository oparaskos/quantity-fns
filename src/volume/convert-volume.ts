import { IQuantity } from "../quantity";
import { factorConvert } from "../lib/factor-convert";
import { findConversionFactor } from "./volume-conversions";
import { validate } from "../validate/validate";

export function convert(input: IQuantity, targetUnits: string): IQuantity {
    validate(input);
    return {
        quantity: factorConvert(input.quantity,
            findConversionFactor(input.unit),
            findConversionFactor(targetUnits)),
        unit: targetUnits,
        type: "volume",
    };
}

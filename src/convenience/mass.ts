import { IQuantity } from "../lib/quantity";

export function grams(quantity: number): IQuantity {
    return { unit: "g", type: "mass", quantity };
}
export function kilos(quantity: number): IQuantity {
    return { unit: "kg", type: "mass", quantity };
}

import { IQuantity } from "../quantity";
import { convert } from "./convert";

/**
 * Perform some operation on two quantities after converting to same unit.
 *
 * @param a lhs
 * @param b rhs of any type that can be converted to the unit of a.
 * @param op operation to perform
 * @returns new quanity based on a with quantity = quantity of b as a's units `op` quantity of a
 */
export function reduceQuantities(qtys: IQuantity[], op: (a: number, b: number) => number): IQuantity {
    if (qtys.length <= 0) {
        throw new Error("At least one quantity must be provided");
    }
    const a = qtys[0];
    if (qtys.some((q) => q.type !== a.type)) {
        throw new Error(`Incompatible quantity types; cannot reconcile types '${qtys.map((q) => q.type)}'`);
    }
    return {
        ...a,
        quantity: qtys
            .slice(1)
            .map((q) => convert(q, a.unit).quantity)
            .reduce(op, a.quantity),
    };
}

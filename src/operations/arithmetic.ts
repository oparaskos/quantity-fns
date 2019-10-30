import { IQuantity } from "../lib/quantity";
import { reduceQuantities } from "./simple-operation";

/**
 * Sum multiple quantities
 *
 * @param qtys
 * @returns new quanity based on a with quantity = quantity of b as a's units + quantity of a
 */
export function add(qtys: IQuantity[]): IQuantity {
    return reduceQuantities(qtys, (x, y) => x + y);
}

/**
 * Subtract multiple quantities
 *
 * @param qtys
 * @returns new quanity based on a with quantity = quantity of b as a's units - quantity of a
 */
export function subtract(qtys: IQuantity[]): IQuantity {
    return reduceQuantities(qtys, (x, y) => x - y);
}

/**
 * Multiply multiple quantities
 *
 * @param qtys
 * @returns new quanity based on a with quantity = quantity of b as a's units * quantity of a
 */
export function multiply(qtys: IQuantity[]): IQuantity {
    return reduceQuantities(qtys, (x, y) => x * y);
}

/**
 * Divide multiple quantities
 *
 * @param qtys
 * @returns new quanity based on a with quantity = quantity of b as a's units / quantity of a
 */
export function divide(qtys: IQuantity[]): IQuantity {
    return reduceQuantities(qtys, (x, y) => x / y);
}

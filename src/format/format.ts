import { IQuantity } from "../lib/quantity";

export function format(
    quantity: IQuantity,
    options?: { locales: string[] }): string {

    const amount = Intl.NumberFormat(options && options.locales)
        .format(quantity.quantity);
    return `${amount} ${quantity.unit}`;
}

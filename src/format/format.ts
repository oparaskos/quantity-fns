import { IQuantity } from "../lib/quantity";

export function format(
    quantity: IQuantity,
    options?: { locales: string[] }): string {

    let amount = "" + quantity.quantity;
    if (Intl) {
        amount = Intl.NumberFormat(options && options.locales || "en-GB")
            .format(quantity.quantity);
    }
    return `${amount} ${quantity.unit}`;
}

import { IQuantity } from "../lib/quantity";

export function format(
    quantity: IQuantity,
    options?: { locales?: string[], includeType?: boolean | undefined }): string {

    let amount = "" + quantity.quantity;
    if (Intl) {
        amount = Intl.NumberFormat(options && options.locales || "en-GB")
            .format(quantity.quantity);
    }
    let result = `${amount} ${quantity.unit}`;
    if (options && options.includeType) {
        result += ` (${quantity.type})`;
    }
    return result;
}

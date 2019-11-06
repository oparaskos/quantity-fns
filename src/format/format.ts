import { IQuantity } from "../quantity";
import { _validate } from "../validate/validate";

export function format(
    quantity: IQuantity,
    options?: { locales?: string[], includeType?: boolean | undefined }): string;
export function format(
    quantity: {unit: string, quantity: number, type?: string},
    options?: { locales?: string[], includeType?: boolean | undefined }): string {
    _validate(quantity, { ignoreMissing: ["type"] });
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

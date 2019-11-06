import { IQuantity } from "../quantity";
import { FieldError } from "./field-error";
import { ValidationError } from "./validation-error";

const primitiveValidation: {[key: string]: string} = {
    quantity: "number",
    unit: "string",
    type: "string",
};

export interface IValidationOptions {
    ignoreMissing: string[];
}

/**
 * Validate that the quantity has the minimum required properties to make it a quantity.
 *
 * @param qty the object to validate.
 */
export function validate(qty: IQuantity, options?: IValidationOptions): void {
    return _validate(qty, options);
}

export function _validate(qty?: {[k: string]: any}, options?: IValidationOptions): void {
    if (qty == null || typeof qty !== "object") {
        throw new ValidationError("The provided quantity was null or not an object");
    }
    const causes = [];
    for (const key in primitiveValidation) {
        if (options && options.ignoreMissing && options.ignoreMissing.indexOf(key) >= 0) {
            continue;
        }
        if (typeof qty[key] !== primitiveValidation[key]) {
            causes.push(new FieldError({
                field: key,
                rejected: qty[key],
                expectedType: primitiveValidation[key],
                actualType: typeof qty[key],
                message: `${key} must be defined and must be a ${primitiveValidation[key]}`,
            }));
        }
    }
    if (causes.length > 0) {
        throw new ValidationError("One or more fields in the quantity failed validation", causes);
    }
}

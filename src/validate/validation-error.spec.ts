import { expect } from "chai";
import { FieldError } from "./field-error";
import { ValidationError } from "./validation-error";

describe("validation-error", () => {
    it(`should include causes in stack`, () => {
        const causes = [
            new FieldError({field: ".some.field", message: "Oh, No!"}),
            new FieldError({field: ".other.field", message: "Double Trouble."}),
        ];
        const v = new ValidationError("Something is wrong", causes);
        expect(v.stack).to.contain("ValidationError: Something is wrong\n    at");
        expect(v.stack).to.contain("caused by FieldError: Oh, No!\n    at");
        expect(v.stack).to.contain("caused by FieldError: Double Trouble.\n    at");
    });
});

import { expect } from "chai";
import { validate } from "./validate";
import { IQuantity } from "../quantity";

const mandatoryParams = ["quantity", "type", "unit"];

describe("validate", () => {
    it(`should not throw if valid quantity`, () => {
        const quantity: {[key: string]: any} = {
            quantity: 10,
            unit: "kg",
            type: "mass",
        };
        expect(() => validate(quantity as IQuantity)).not.to.throw();
    });
    for (const missingParameter of mandatoryParams) {
        it(`should throw if ${missingParameter} is missing`, () => {
            const quantity: {[key: string]: any} = {
                quantity: 10,
                unit: "kg",
                type: "mass",
            };
            delete quantity[missingParameter];
            expect(() => validate(quantity as IQuantity))
                .to.throw("One or more fields in the quantity failed validation");
        });
    }
    it(`should throw if quantity is not a number`, () => {
        const quantity: {[key: string]: any} = {
            quantity: "carrot",
            unit: "kg",
            type: "mass",
        };
        expect(() => validate(quantity as IQuantity))
            .to.throw("One or more fields in the quantity failed validation");
    });
    it(`should throw if unit is not a string`, () => {
        const quantity: {[key: string]: any} = {
            quantity: 10,
            unit: 1,
            type: "mass",
        };
        expect(() => validate(quantity as IQuantity))
            .to.throw("One or more fields in the quantity failed validation");
    });
    it(`should throw if type is not a string`, () => {
        const quantity: {[key: string]: any} = {
            quantity: 10,
            unit: "kg",
            type: 1,
        };
        expect(() => validate(quantity as IQuantity))
            .to.throw("One or more fields in the quantity failed validation");
    });
});

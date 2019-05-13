import { findConversionFactor } from "./mass-conversions";
import { expect } from "chai";

const testParams = [
    { unit: "kg", expected: 1 },
    { unit: "g", expected: 0.001 },
    { unit: "mg", expected: 0.000001 },
];

describe("findConversionFactor", () => {
    it("should throw if the requested unit is not in the table", () => {
        expect(() => findConversionFactor("blah")).to.throw();
    });
    for (const { unit, expected } of testParams) {
        it(`should return the value of one ${unit} in kilos as ${expected}`, () => {
            expect(findConversionFactor(unit)).to.equal(expected);
        });
    }
});

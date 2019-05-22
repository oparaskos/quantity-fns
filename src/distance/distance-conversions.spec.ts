import { findConversionFactor } from "./distance-conversions";
import { expect } from "chai";

const testParams = [
    { unit: "m", expected: 1 },
    { unit: "cm", expected: 0.01 },
    { unit: "mm", expected: 0.001 },
    { unit: "km", expected: 1000 },
];

describe("findConversionFactor", () => {
    it("should throw if the requested unit is not in the table", () => {
        expect(() => findConversionFactor("blah")).to.throw();
    });
    for (const { unit, expected } of testParams) {
        it(`should return the value of one ${unit} in meters as ${expected}`, () => {
            expect(findConversionFactor(unit)).to.equal(expected);
        });
    }
});

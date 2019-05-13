import { expect, use as chaiPlugin } from "chai";
import { convert } from "./convert-mass";
import almost from "chai-almost";
chaiPlugin(almost());

const testParams = [
    { value: 1, source: "kg", expected: 1, target: "kg" },
    { value: 1, source: "kg", expected: 1000, target: "g" },
    { value: 1, source: "g", expected: 0.001, target: "kg" },
    { value: 1, source: "g", expected: 0.001, target: "kg" },
    { value: 1, source: "mg", expected: 0.001, target: "g" },
    { value: 1, source: "mg", expected: 0.000001, target: "kg" },
];

describe("convert mass", () => {
    for (const p of testParams) {
        it(`should convert ${p.value}${p.source} to ${p.target} as ${p.expected}`, () => {
            const conversion = convert({
                quantity: p.value,
                unit: p.source,
                type: "mass",
            }, p.target);
            expect(conversion).to.deep.equal({
                quantity: p.expected,
                unit: p.target,
                type: "mass",
            });
        });
    }
});

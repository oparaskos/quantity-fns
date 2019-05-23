import { expect, use as chaiPlugin } from "chai";
import { convert } from "./convert-density";
import almost from "chai-almost";
chaiPlugin(almost());

const testParams = [
    { value: 1, source: "g/cm^3", expected: 1000, target: "kg/m^3" },
    { value: 1, source: "g/cm3", expected: 1, target: "g/cm^3" },
    { value: 1, source: "g/cm^3", expected: 1, target: "kg/L" },
    { value: 1, source: "lb/ft3", expected: 16.01846, target: "kg/m3", tolerance: 1e-3 },
    { value: 9, source: "lb/ft3", expected: 144.16617, target: "kg/m3", tolerance: 1e-3 },
];

describe("convert density", () => {
    for (const p of testParams) {
        it(`should convert ${p.value}${p.source} to ${p.target} as ${p.expected} (±${p.tolerance || 1e-10})`, () => {
            const conversion = convert({
                quantity: p.value,
                unit: p.source,
                type: "density",
            }, p.target);
            expect(conversion).to.deep.almost({
                quantity: p.expected,
                unit: p.target,
                type: "density",
            }, p.tolerance);
        });
    }
});

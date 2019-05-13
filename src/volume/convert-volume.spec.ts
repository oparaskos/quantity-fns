import { expect, use as chaiPlugin } from "chai";
import { convert } from "./convert-volume";
import almost from "chai-almost";
chaiPlugin(almost());

const testParams = [
    { value: 1, source: "L", expected: 1, target: "L" },
    { value: 1, source: "L", expected: 1000, target: "ml" },
    { value: 1, source: "ml", expected: 0.001, target: "L" },
];

describe("convert volume", () => {
    for (const p of testParams) {
        it(`should convert ${p.value}${p.source} to ${p.target} as ${p.expected}`, () => {
            const conversion = convert({
                quantity: p.value,
                unit: p.source,
                type: "volume",
            }, p.target);
            expect(conversion).to.deep.almost({
                quantity: p.expected,
                unit: p.target,
                type: "volume",
            });
        });
    }
});

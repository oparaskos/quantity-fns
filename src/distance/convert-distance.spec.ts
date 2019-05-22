import { expect, use as chaiPlugin } from "chai";
import { convert } from "./convert-distance";
import almost from "chai-almost";
chaiPlugin(almost());

const testParams = [
    // Metric -> Metric
    { value: 1, source: "m", expected: 1, target: "m" },
    { value: 1, source: "km", expected: 1000, target: "m" },
    { value: 1, source: "m", expected: 0.001, target: "km" },
    { value: 1, source: "cm", expected: 0.01, target: "m" },
    { value: 1, source: "mm", expected: 0.001, target: "m" },

    // Imperial -> Metric
    { value: 1, source: "in", expected: 0.0254, target: "m" },
    { value: 1, source: "in", expected: 2.54, target: "cm" },

    // Imperial -> Imperial
    { value: 1, source: "in", expected: 1, target: "in" },
    { value: 1, source: "in", expected: (1 / 12), target: "ft" },
    { value: 1, source: "in", expected: 1000, target: "thou" },
    { value: 1, source: "thou", expected: 0.001, target: "in" },
    { value: 1, source: "thou", expected: (1 / 12e3), target: "feet" },
    { value: 1, source: "thou", expected: 0.0000254, target: "m" },
    { value: 1, source: "ft", expected: 12, target: "in" },
    { value: 1, source: "yd", expected: 3, target: "ft" },
    { value: 1, source: "ch", expected: 22, target: "yd" },
    { value: 1, source: "furlong", expected: 10, target: "ch" },
    { value: 1, source: "furlong", expected: 220, target: "yd" },
    { value: 1, source: "mi", expected: 8, target: "fur" },
    { value: 1, source: "league", expected: 3, target: "miles" },
];

describe("convert distance", () => {
    for (const p of testParams) {
        it(`should convert ${p.value}${p.source} to ${p.target} as ${p.expected}`, () => {
            const conversion = convert({
                quantity: p.value,
                unit: p.source,
                type: "distance",
            }, p.target);
            expect(conversion).to.deep.almost({
                quantity: p.expected,
                unit: p.target,
                type: "distance",
            });
        });
    }
});

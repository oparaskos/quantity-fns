import { expect, use as chaiPlugin } from "chai";
import { format } from "./format";
import almost from "chai-almost";
chaiPlugin(almost());

const testParams = [
    { expected: "10 g", value: { type: "mass", quantity: 10, unit: "g" } },
    { expected: "330 cc", value: { type: "volume", quantity: 330, unit: "cc" } },
    { expected: "1.75 kg", value: { type: "mass", quantity: 1.75, unit: "kg" } },
    { expected: "31,415 kg", value: { type: "mass", quantity: 31415, unit: "kg" } },
    {
        expected: "1.003,142 kg", withOpts: { locales: ["de-DE"] },
        value: { type: "mass", quantity: 1003.1415, unit: "kg" },
    },
    { expected: "10 mi", value: { type: "distance", quantity: 10, unit: "mi" } },
    { expected: "38.2 km", value: { type: "distance", quantity: 38.2, unit: "km" } },
    { expected: "1.3 g/cm3", value: { type: "density", quantity: 1.3, unit: "g/cm3" } },
];

describe("format quantity", () => {
    for (const p of testParams) {
        it(`should format '${JSON.stringify(p.value)}' as '${p.expected}'`, () => {
            const conversion = format(p.value, p.withOpts);
            expect(conversion).to.deep.almost(p.expected);
        });
    }
});

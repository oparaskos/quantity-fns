import { expect, use as chaiPlugin } from "chai";
import { parse } from "./parse";
import almost from "chai-almost";
chaiPlugin(almost());

const testParams = [
    { value: "10 g", expected: { type: "mass", quantity: 10, unit: "g" } },
    { value: "330 cc", expected: { type: "volume", quantity: 330, unit: "cc" } },
    { value: "1.75 kg", expected: { type: "mass", quantity: 1.75, unit: "kg" } },
    { value: "31,415 kg", expected: { type: "mass", quantity: 31415, unit: "kg" } },
    {
        value: "1.003,1415 kg", withOpts: { decimalPlace: ",", thousandsSeperator: "." },
        expected: { type: "mass", quantity: 1003.1415, unit: "kg" },
    },
];

describe("parse quantity", () => {
    for (const p of testParams) {
        it(`should parse '${p.value}' as '${JSON.stringify(p.expected)}'`, () => {
            const conversion = parse(p.value, p.withOpts);
            expect(conversion).to.deep.almost(p.expected);
        });
    }

    it("should throw if not given a unit", () => {
        expect(() => parse("10")).to.throw();
    });

    it("should throw if not given a value", () => {
        expect(() => parse("kg")).to.throw();
    });

    it("should throw if not given a recognised unit", () => {
        expect(() => parse("10 micromegagrams")).to.throw();
    });

    it("should log a warning if there are multiple candidates for a given unit, unless type is specified");
});

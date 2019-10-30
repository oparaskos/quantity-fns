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
        value: "1.003,1415 kg", withOpts: { locales: "de-DE" },
        expected: { type: "mass", quantity: 1003.1415, unit: "kg" },
    },
    { value: "10mi", expected: { type: "distance", quantity: 10, unit: "mi" } },
    { value: "38.2 km", expected: { type: "distance", quantity: 38.2, unit: "km" } },
    { value: "1.3 g/cm3", expected: { type: "density", quantity: 1.3, unit: "g/cm3" } },
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

    it("should throw if type not valid for unit", () => {
        expect(() => parse("10 mm", { type: "volume" })).to.throw("mm is not a unit of volume");
    });

    it("should throw if locale provided and not valid", () => {
        expect(() => parse("10 mm", { locales: "somewhere_fake" })).to.throw("Invalid language tag: somewhere_fake");
    });

    it("should throw if not given a value", () => {
        expect(() => parse("kg")).to.throw();
    });

    it("should throw if not given a recognised unit", () => {
        expect(() => parse("10 micromegagrams")).to.throw();
    });

    it("should log a warning if there are multiple candidates for a given unit, unless type is specified");
});

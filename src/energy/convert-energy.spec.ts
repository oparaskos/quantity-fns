import { expect, use as chaiPlugin } from "chai";
import { convert } from "./convert-energy";
import almost from "chai-almost";
chaiPlugin(almost());

const testParams = [
    { value: 1, source: "J", expected: 1, target: "J" },
    { value: 1, source: "J", expected: 2.77778e-4, target: "Wh" },
    { value: 1, source: "J", expected: 2.77778e-7, target: "kWh" },
    { value: 1, source: "J", expected: 6.241509125883258e18, target: "eV" },
    { value: 1, source: "J", expected: 0.2390057, target: "cal" },

    { value: 1, source: "Wh", expected: 3.6e3, target: "J" },
    { value: 1, source: "Wh", expected: 1, target: "Wh" },
    { value: 1, source: "Wh", expected: 0.001, target: "kWh" },
    { value: 1, source: "Wh", expected: 2.2469432853179726e22, target: "eV", tolerance: 1e11 },
    { value: 1, source: "Wh", expected: 860.42065, target: "cal" },

    { value: 1, source: "kWh", expected: 3.6e6, target: "J" },
    { value: 1, source: "kWh", expected: 1000, target: "Wh" },
    { value: 1, source: "kWh", expected: 1, target: "kWh" },
    { value: 1, source: "kWh", expected: 2.2469432853179726e25, target: "eV", tolerance: 1e14 },
    { value: 1, source: "kWh", expected: 8.6042065e5, target: "cal" },

    { value: 1, source: "eV", expected: 1.602e-19, target: "J" },
    { value: 1, source: "eV", expected: 4.45e-23, target: "Wh" },
    { value: 1, source: "eV", expected: 4.45e-26, target: "kWh" },
    { value: 1, source: "eV", expected: 1, target: "eV" },
    { value: 1, source: "eV", expected: 3.827e-20, target: "cal" },

    { value: 1, source: "BTU", expected: 252.1644, target: "cal" },
    { value: 1, source: "BTU", expected: 1.05506, target: "kJ" },
];

describe("convert energy", () => {
    for (const p of testParams) {
        it(`should convert ${p.value}${p.source} to ${p.target} as `
            + `${p.expected} (±${p.tolerance || 0.001})`, () => {
                const conversion = convert({
                    quantity: p.value,
                    unit: p.source,
                    type: "energy",
                }, p.target);
                expect(conversion).to.deep.almost({
                    quantity: p.expected,
                    unit: p.target,
                    type: "energy",
                }, p.tolerance || 0.001);
            });
    }
});

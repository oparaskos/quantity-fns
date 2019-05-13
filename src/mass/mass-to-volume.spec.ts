import { expect } from "chai";
import { massToVolume } from "./mass-to-volume";
import { DensityOf } from "../density/density-of";

const testParams = [
    {
        mass: {
            quantity: 1,
            unit: "g",
            type: "mass",
        },
        density: DensityOf.Water,
        expected: {
            quantity: 1,
            unit: "ml",
            type: "volume",
        },
    },
    {
        mass: {
            quantity: 1,
            unit: "kg",
            type: "mass",
        },
        density: DensityOf.Water,
        expected: {
            quantity: 1,
            unit: "L",
            type: "volume",
        },
    },
    {
        mass: {
            quantity: 1000,
            unit: "kg",
            type: "mass",
        },
        density: DensityOf.Water,
        expected: {
            quantity: 1,
            unit: "m^3",
            type: "volume",
        },
    },
];

describe("massToVolume", () => {
    // it("should throw if the requested unit is not in the table", () => {
    //     expect(() => massToVolume("blah")).to.throw();
    // });
    for (const { mass, density, expected } of testParams) {
        it(`should return ${mass.quantity}${mass.unit} of water = ${expected.quantity}${expected.unit}`, () => {
            const volume = massToVolume(mass, density, expected.unit);
            expect(volume).to.deep.equal(expected);
        });
    }
});

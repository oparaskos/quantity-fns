import { expect } from "chai";
import { volumeToMass } from "./volume-to-mass";
import { DensityOf } from "../density/density-of";

const testParams = [
    {
        volume: {
            quantity: 1,
            unit: "m^3",
            type: "volume",
        },
        density: DensityOf.Water,
        expected: {
            quantity: 1000,
            unit: "kg",
            type: "mass",
        },
    },
    {
        volume: {
            quantity: 1,
            unit: "ml",
            type: "volume",
        },
        density: DensityOf.Water,
        expected: {
            quantity: 1,
            unit: "g",
            type: "mass",
        },
    },
    {
        volume: {
            quantity: 1,
            unit: "L",
            type: "volume",
        },
        density: DensityOf.Water,
        expected: {
            quantity: 1,
            unit: "kg",
            type: "mass",
        },
    },
];

describe("volumeToMass", () => {
    // it("should throw if the requested unit is not in the table", () => {
    //     expect(() => massToVolume("blah")).to.throw();
    // });
    for (const { volume, density, expected } of testParams) {
        it(`should return ${volume.quantity}${volume.unit} of water = ${expected.quantity}${expected.unit}`, () => {
            const mass = volumeToMass(volume, density, expected.unit);
            expect(mass).to.deep.equal(expected);
        });
    }
});

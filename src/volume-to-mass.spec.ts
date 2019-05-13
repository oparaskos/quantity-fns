import { expect } from "chai";
import { volumeToMass } from "./volume-to-mass";
import { DensityOf } from "./density-of";

const testParams = [
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
];

describe("volumeToMass", () => {
    // it("should throw if the requested unit is not in the table", () => {
    //     expect(() => massToVolume("blah")).to.throw();
    // });
    for (const { volume, density, expected } of testParams) {
        it(`should return the mass of the given volume`, () => {
            const mass = volumeToMass(volume, density);
            expect(mass).to.deep.equal(expected);
        });
    }
});

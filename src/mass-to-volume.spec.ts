import { expect } from "chai";
import { massToVolume } from "./mass-to-volume";
import { DensityOf } from "./density-of";

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
];

describe("massToVolume", () => {
    // it("should throw if the requested unit is not in the table", () => {
    //     expect(() => massToVolume("blah")).to.throw();
    // });
    for (const { mass, density, expected } of testParams) {
        it(`should return the volume of the given mass`, () => {
            const volume = massToVolume(mass, density);
            expect(volume).to.deep.equal(expected);
        });
    }
});

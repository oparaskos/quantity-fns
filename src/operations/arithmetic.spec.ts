import { expect, use as chaiPlugin } from "chai";
import { add, multiply, subtract } from "./arithmetic";
import almost from "chai-almost";
import { grams, kilos } from "../convenience/mass";
chaiPlugin(almost());

describe("arithmetic on quantities", () => {

    it("should throw if types do not match", () => {
        expect(() => add([
            grams(10),
            grams(10),
            {unit: "eV", type: "energy", quantity: 10},
        ])).to.throw();
    });

    it("10g + 10g = 20g", () => {
        expect(add([
            grams(10),
            grams(10),
        ])).to.deep.eq(grams(20));
    });

    it("1kg + 10g = 1.01kg", () => {
        expect(add([
            kilos(1),
            grams(10),
        ])).to.deep.eq(kilos(1.01));
    });

    it("1g + 1kg + 1kg = 2001g", () => {
        expect(add([
            grams(1),
            kilos(1),
            kilos(1),
        ])).to.deep.eq(grams(2001));
    });

    it("2g * 1kg = 2000g", () => {
        expect(multiply([
            grams(2),
            kilos(1),
        ])).to.deep.eq(grams(2000));
    });

    it("20kg - 1kg - 1kg = 18kg", () => {
        expect(subtract([
            kilos(20),
            kilos(1),
            kilos(1),
        ])).to.deep.eq(kilos(18));
    });

});

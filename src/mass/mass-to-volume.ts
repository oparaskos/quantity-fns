import { IQuantity } from "../lib/quantity";

import { convert as massConvert } from "./convert-mass";
import { convert as volConvert } from "../volume/convert-volume";

export function massToVolume(mass: IQuantity, density: number, targetUnits = "ml"): IQuantity {
    const massInKg = massConvert(mass, "kg");
    return volConvert({
        quantity: massInKg.quantity / density,
        unit: "m^3",
        type: "volume",
    }, targetUnits);
}

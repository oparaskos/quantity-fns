import { IQuantity } from "../quantity";

import { convert as massConvert } from "../mass/convert-mass";
import { convert as volConvert } from "./convert-volume";

export function volumeToMass(mass: IQuantity, density: number, targetUnits = "g"): IQuantity {
    const volumeInCubicMetres = volConvert(mass, "m^3");
    return massConvert({
        quantity: density * volumeInCubicMetres.quantity,
        unit: "kg",
        type: "volume",
    }, targetUnits);
}

import { IQuantity } from "./quantity";

import { convert as massConvert } from "./convert-mass";
import { convert as volConvert } from "./convert-volume";

export function volumeToMass(mass: IQuantity, density: number, targetUnits = "g"): IQuantity {
    const volumeInL = volConvert(mass, "L");
    return massConvert({
        quantity: volumeInL.quantity * density,
        unit: "kg",
        type: "volume",
    }, targetUnits);
}

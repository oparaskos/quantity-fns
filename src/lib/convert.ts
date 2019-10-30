import { IQuantity } from "./quantity";

import { convert as density } from "../density/convert-density";
import { convert as distance } from "../distance/convert-distance";
import { convert as energy } from "../energy/convert-energy";
import { convert as mass } from "../mass/convert-mass";
import { convert as volume } from "../volume/convert-volume";

const conversionsByType: {[type: string]: (qty: IQuantity, unit: string) => IQuantity}
    = { density, distance, energy, mass, volume };

/**
 * Convert some `quantity` of unknown type to the given `unit`s if applicable.
 *
 * @throws if conversion fails
 * @throws if type of quantity is not one of 'density', 'distance', 'energy', 'mass', 'volume'
 * @param a quantity to convert
 * @param unit units to convert to.
 * @return a new quantity with units provided bu `unit` and the appropriatley adjusted `quantity`
 */
export function convert(a: IQuantity, unit: string): IQuantity {
    if (!conversionsByType.hasOwnProperty(a.type)) {
        throw new Error(`Unsupported type '${a.type}'`);
    }
    return conversionsByType[a.type](a, unit);
}

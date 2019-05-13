import { findConversionFactor  as f } from "../lib/factor-convert";
/**
 * Object containing mappings from unit to their value in m^3
 */
export const volumeConversions: {
    [unit: string]: number;
} = {
    "m^3": 1,
    "l": 0.001,
    "L": 0.001,
    "ml": 0.000001,
};

export const findConversionFactor = f.bind(null, volumeConversions);

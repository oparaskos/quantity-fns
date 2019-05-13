import { findConversionFactor  as f } from "./factor-convert";
/**
 * Object containing mappings from unit to their value in litres
 */
export const volumeConversions: {
    [unit: string]: number;
} = {
    L: 1,
    ml: 0.001,
};

export const findConversionFactor = f.bind(null, volumeConversions);

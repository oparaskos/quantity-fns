import { findConversionFactor  as f } from "../lib/factor-convert";

/**
 * Object containing mappings from unit to their value in kilos
 */
export const massConversions: {
    [unit: string]: number;
} = {
    kg: 1,
    g: 0.001,
    mg: 0.000001,
};

export const findConversionFactor = f.bind(null, massConversions);

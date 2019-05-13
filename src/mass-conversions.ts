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

export function findConversionFactor(unit: string): number {
    if (massConversions.hasOwnProperty(unit)) {
        return massConversions[unit];
    } else {
        throw new Error("Unknown unit '" + unit + "'");
    }
}

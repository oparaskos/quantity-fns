import { findConversionFactor as f } from "../lib/factor-convert";
import { indexMappingTable } from "../lib/index-mapping-table";

// equivelantTo refers to its value in kilos
const mappingTable: Array<{ unitNames: string[], equivelantTo: number }> = [
    { unitNames: ["kg", "kilogram", "kilograms", "kilo", "kilos"], equivelantTo: 1 },
    { unitNames: ["g", "gr", "gram", "grams"], equivelantTo: 0.001 },
    { unitNames: ["mg", "milligram", "milligrams"], equivelantTo: 0.000001 },
];

export const massConversions: { [unit: string]: number; } = indexMappingTable(mappingTable);
export const findConversionFactor = f.bind(null, massConversions);

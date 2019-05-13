import { findConversionFactor as f } from "../lib/factor-convert";
import { indexMappingTable } from "../lib/index-mapping-table";

// equivelantTo refers to its value in kilos
export const mappingTable: Array<{ unitNames: string[], equivelantTo: number }> = [
    { unitNames: ["pg", "picogram", "picograms"], equivelantTo: 1e-15 },
    { unitNames: ["ng", "nanogram", "nanograms"], equivelantTo: 1e-12 },
    { unitNames: ["µg", "microgram", "micrograms"], equivelantTo: 1e-9 },
    { unitNames: ["mg", "milligram", "milligrams"], equivelantTo: 1e-6 },
    { unitNames: ["cg", "centigram", "centigrams"], equivelantTo: 1e-5 },
    { unitNames: ["dg", "decigram", "decigrams"], equivelantTo: 1e-4 },
    { unitNames: ["g", "gr", "gram", "grams"], equivelantTo: 1e-3 },
    { unitNames: ["dag", "decagram", "decagrams"], equivelantTo: 1e-2 },
    { unitNames: ["hg", "hectogram", "hectograms"], equivelantTo: 1e-1 },
    { unitNames: ["kg", "kilogram", "kilograms", "kilo", "kilos"], equivelantTo: 1 },
    { unitNames: ["Mg", "megagram", "megagrams", "tonne"], equivelantTo: 1e3 },
    { unitNames: ["Gg", "gigagram", "gigagrams"], equivelantTo: 1e6 },
    { unitNames: ["Tg", "teragram", "teragrams"], equivelantTo: 1e9 },
];

export const massConversions: { [unit: string]: number; } = indexMappingTable(mappingTable);
export const findConversionFactor = f.bind(null, massConversions);

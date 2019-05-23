import { findConversionFactor as f } from "../lib/factor-convert";
import { indexMappingTable } from "../lib/index-mapping-table";

export interface IConversion {
    unitNames: string[];
    equivelantTo: number;
    [additionalProperties: string]: any;
}
// equivelantTo refers to its value in kilos
export const metric: IConversion[] = [
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

const POUND_IN_KILOS = 0.453592;
export const imperial: IConversion[] = [
    { unitNames: ["lb", "pound", "pounds"], equivelantTo: POUND_IN_KILOS },
    { unitNames: ["oz", "ounce", "ounces"], equivelantTo: (1 / 16) * POUND_IN_KILOS },
    { unitNames: ["t", "ton", "tons"], equivelantTo: 907.18474 },
];

export const metricConversions: { [unit: string]: number; } = indexMappingTable(metric);
export const imperialConversions: { [unit: string]: number; } = indexMappingTable(imperial);
export const massConversions: { [unit: string]: number; } = { ...metricConversions, ...imperialConversions };
export const findConversionFactor = f.bind(null, massConversions);

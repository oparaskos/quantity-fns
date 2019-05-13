import { indexMappingTable } from "../lib/index-mapping-table";
import { findConversionFactor as f } from "../lib/factor-convert";

// equivelantTo refers to its value in litres
export const mappingTable: Array<{ unitNames: string[], equivelantTo: number }> = [
    {
        unitNames: ["Ml", "ML", "megaliter", "megalitre", "megaliters", "megalitres",
            "dam^3", "dam3", "decameters cubed", "decametres cubed", "decameter cubed",
            "decametre cubed", "cubic decametres", "cubic decameters", "cubic decametre",
            "cubic decameter"], equivelantTo: 1e6,
    },
    {
        unitNames: ["kl", "kL", "kiloliter", "kilolitre", "kiloliters", "kilolitres",
            "m^3", "m3", "meters cubed", "metres cubed", "meter cubed", "metre cubed",
            "cubic metres", "cubic meters", "cubic metre", "cubic meter"], equivelantTo: 1e3,
    },
    {
        unitNames: ["hl", "hL", "hectolitre", "hectolitres", "hectoliter", "hectoliters"],
        equivelantTo: 1e2,
    },
    {
        unitNames: ["dal", "daL", "decalitre", "decalitres", "decaliter", "decaliters"],
        equivelantTo: 1e1,
    },
    {
        unitNames: ["l", "L", "ℓ", "liter", "litre", "liters", "litres",
            "dm3", "dm^3", "decimeters cubed", "decimetres cubed",
            "decimeter cubed", "decimetre cubed", "cubic decimetres", "cubic decimeters",
            "cubic decimetre", "cubic decimeter"], equivelantTo: 1,
    },
    {
        unitNames: ["dl", "dL", "decilitre", "deciliter", "decilitres", "deciliters"],
        equivelantTo: 1e-1,
    },
    {
        unitNames: ["cl", "cL", "centilitre", "centiliter", "centilitres", "centiliters"],
        equivelantTo: 1e-2,
    },
    {
        unitNames: ["ml", "mL", "millilitre", "milliliter", "millilitres", "milliliters",
            "cm3", "cm^3", "cc", "ccm", "centimeters cubed", "centimetres cubed",
            "centimeter cubed", "centimetre cubed", "cubic centimetres", "cubic centimeters",
            "cubic centimetre", "cubic centimeter"], equivelantTo: 1e-3,
    },
    {
        unitNames: ["μl", "μL", "microlitre", "microliter", "microlitres", "microliters",
            "mm3", "mm^3", "millimeters cubed", "millimetres cubed",
            "millimeter cubed", "millimetre cubed", "cubic millimetres", "cubic millimeters",
            "cubic millimetre", "cubic millimeter"], equivelantTo: 1e-6,
    },
];

export const volumeConversions: { [unit: string]: number; } = indexMappingTable(mappingTable);

export const findConversionFactor = f.bind(null, volumeConversions);

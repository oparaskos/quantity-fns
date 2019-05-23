import { indexMappingTable } from "../lib/index-mapping-table";
import { findConversionFactor as f } from "../lib/factor-convert";

export interface IConversion {
    unitNames: string[];
    equivelantTo: number;
    [additionalProperties: string]: any;
}

// equivelantTo refers to its value in litres
export const metric: IConversion[] = [
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
            "cc", "ccm",
            ...cubed("centimeter", "centimeters", "cm"),
            ...cubed("centimetre", "centimetres", "cm")], equivelantTo: 1e-3,
    },
    {
        unitNames: ["μl", "μL", "microlitre", "microliter", "microlitres", "microliters",
            ...cubed("millimeter", "millimeters", "mm"),
            ...cubed("millimetre", "millimetres", "mm")], equivelantTo: 1e-6,
    },
];

export const imperial: IConversion[] = [
    { unitNames: cubed("inch", "inches", "in"), equivelantTo: 61.024 },
    { unitNames: cubed("foot", "feet", "ft"), equivelantTo: 28.31685 },
    { unitNames: cubed("yard", "yards", "yd"), equivelantTo: 764.5549},
];

function cubed(unitSingular: string, unitPlural: string, unitShort: string): string[] {
    return [
        `${unitShort}3`,
        `${unitShort}^3`,
        `${unitShort} cu`,
        `cu ${unitShort}`,
        `${unitSingular} cubed`,
        `cubic ${unitSingular}`,
        `${unitPlural} cubed`,
        `cubic ${unitPlural}`,
    ];
}

export const metricVolumeConversions: { [unit: string]: number; } = indexMappingTable(metric);
export const imperialVolumeConversions: { [unit: string]: number; } = indexMappingTable(imperial);
export const volumeConversions = { ...metricVolumeConversions, ...imperialVolumeConversions };
export const findConversionFactor = f.bind(null, volumeConversions);

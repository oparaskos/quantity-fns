import { findConversionFactor as f } from "../lib/factor-convert";
import { indexMappingTable } from "../lib/index-mapping-table";

export interface IDistanceMaping {
    unitNames: string[];
    equivelantTo: number;
    [additionalProperties: string]: any;
}

// equivelantTo refers to its value in meters
export const metric: IDistanceMaping[] = [
    { unitNames: ["pm", "picometer", "picometers", "picometre", "picometres"], equivelantTo: 1e-15, class: "metric" },
    { unitNames: ["nm", "nanometer", "nanometers", "nanometre", "nanometres"], equivelantTo: 1e-12, class: "metric" },
    {
        unitNames: ["µm", "micrometer", "micrometers", "micrometre", "micrometres"],
        equivelantTo: 1e-9, class: "metric",
    },
    {
        unitNames: ["mm", "millimeter", "millimeters", "millimetre", "millimetres"],
        equivelantTo: 1e-3, class: "metric",
    },
    {
        unitNames: ["cm", "centimeter", "centimeters", "centimetre", "centimetres"],
        equivelantTo: 1e-2, class: "metric",
    },
    { unitNames: ["dm", "decimeter", "decimeters", "decimetre", "decimetres"], equivelantTo: 1e-1, class: "metric" },
    { unitNames: ["m", "meter", "meters", "metre", "metres"], equivelantTo: 1, class: "metric" },
    { unitNames: ["dam", "decameter", "decameters", "decametre", "decametres"], equivelantTo: 1e1, class: "metric" },
    { unitNames: ["hm", "hectometer", "hectometers", "hectometre", "hectometres"], equivelantTo: 1e2, class: "metric" },
    { unitNames: ["km", "kilometer", "kilometers", "kilometre", "kilometres"], equivelantTo: 1e3, class: "metric" },
    { unitNames: ["Mm", "megameter", "megameters", "megametre", "megametres"], equivelantTo: 1e6, class: "metric" },
    { unitNames: ["Gm", "gigameter", "gigameters", "gigametre", "gigametres"], equivelantTo: 1e9, class: "metric" },
    { unitNames: ["Tm", "terameter", "terameters", "terametre", "terametres"], equivelantTo: 1e12, class: "metric" },
];

const INCH_TO_METER = 0.0254;
export const imperial: IDistanceMaping[] = [
    { unitNames: ['"', "in", "inch", "inches"], equivelantTo: INCH_TO_METER, class: "imperial" },
    { unitNames: ["thou", "mil"], equivelantTo: INCH_TO_METER / 1000, class: "imperial" },
    { unitNames: ["ft", "'", "foot", "feet"], equivelantTo: 0.3048, class: "imperial" },
    { unitNames: ["yd", "yard", "yards"], equivelantTo: 0.9144, class: "imperial" },
    { unitNames: ["ch", "chain", "chains"], equivelantTo: 20.1168, class: "imperial" },
    { unitNames: ["fur", "furlong", "furlongs"], equivelantTo: 201.168, class: "imperial" },
    { unitNames: ["mi", "mile", "miles"], equivelantTo: 1609.344, class: "imperial" },
    { unitNames: ["lea", "league", "leagues"], equivelantTo: 4828.032, class: "imperial" },
];

export const metricDistanceConversions: { [unit: string]: number; } = indexMappingTable(metric);
export const imperialDistanceConversions: { [unit: string]: number; } = indexMappingTable(imperial);
export const distanceConversions = { ...metricDistanceConversions, ...imperialDistanceConversions };
export const findConversionFactor = f.bind(null, distanceConversions);

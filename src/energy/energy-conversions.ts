
import { indexMappingTable } from "../lib/index-mapping-table";
import { findConversionFactor as f } from "../lib/factor-convert";

const WATTHOUR_IN_JOULES = 3.6e3;
const CALORIE_IN_JOULES = 4184e-3;
const ELECTRONVOLT_IN_JOULES = 1.6021766208e-19;
// equivelantTo refers to its value in Joules
export const mappingTable: Array<{ unitNames: string[], equivelantTo: number }> = [
    {
        unitNames: ["pJ", "picojoule", "picojoules"],
        equivelantTo: 1e-12,
    },
    {
        unitNames: ["nJ", "nanojoule", "nanojoules"],
        equivelantTo: 1e-9,
    },
    {
        unitNames: ["µJ", "microjoule", "microjoules"],
        equivelantTo: 1e-6,
    },
    {
        unitNames: ["mJ", "millijoule", "millijoules"],
        equivelantTo: 1e-3,
    },
    {
        unitNames: ["J", "kg⋅m2⋅s−2", "joule", "joules"],
        equivelantTo: 1,
    },
    {
        unitNames: ["kJ", "kilojoule", "kilojoules"],
        equivelantTo: 1e3,
    },
    {
        unitNames: ["MJ", "megajoule", "megajoules"],
        equivelantTo: 1e6,
    },
    {
        unitNames: ["GJ", "gigajoule", "gigajoules"],
        equivelantTo: 1e9,
    },
    {
        unitNames: ["TJ", "terajoule", "terajoules"],
        equivelantTo: 1e12,
    },
    {
        unitNames: ["british thermal unit", "british thermal units", "Btu", "BTU"],
        equivelantTo: 1055.056, // [ISO 31-4]
    },
    {
        unitNames: ["cal", "small calorie", "gram calorie", "small calories", "gram calories"],
        equivelantTo: CALORIE_IN_JOULES,
    },
    {
        unitNames: ["kcal", "large calorie", "food calorie", "kilocalorie",
            "large calories", "food calories", "kilocalories", "Cal"],
        equivelantTo: CALORIE_IN_JOULES * 1e3,
    },
    {
        unitNames: ["µW⋅h", "µWh", "µW h", "microwatt hour", "microwatt hours"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e-6,
    },
    {
        unitNames: ["mW⋅h", "mWh", "mW h", "milliwatt hour", "milliwatt hours"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e-3,
    },
    {
        unitNames: ["W⋅h", "Wh", "W h", "watt hour", "watt hours"],
        equivelantTo: WATTHOUR_IN_JOULES,
    },
    {
        unitNames: ["kW⋅h", "kWh", "kW h", "kilowatt hour", "kilowatt hours"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e3,
    },
    {
        unitNames: ["MW⋅h", "MWh", "MW h", "megawatt hour", "megawatt hours"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e6,
    },
    {
        unitNames: ["GW⋅h", "GWh", "GW h", "gigawatt hour", "gigawatt hours"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e9,
    },
    {
        unitNames: ["TW⋅h", "TWh", "TW h", "terawatt hour", "terawatt hours"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e12,
    },
    {
        unitNames: ["PW⋅h", "PWh", "PW h", "petawatt hour", "petawatt hours"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e15,
    },
    {
        unitNames: ["eV", "electron volts", "electron volt"],
        equivelantTo: ELECTRONVOLT_IN_JOULES,
    },
    {
        unitNames: ["keV"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e3,
    },
    {
        unitNames: ["MeV"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e6,
    },
    {
        unitNames: ["GeV"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e9,
    },
    {
        unitNames: ["TeV"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e12,
    },
    {
        unitNames: ["PeV"],
        equivelantTo: WATTHOUR_IN_JOULES * 1e12,
    },
];

export const energyConversions: { [unit: string]: number; } = indexMappingTable(mappingTable);

export const findConversionFactor = f.bind(null, energyConversions);

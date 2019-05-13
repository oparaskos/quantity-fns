export function indexMappingTable(mappingTable: Array<{
    unitNames: string[];
    equivelantTo: number;
}>): {
    [unit: string]: number;
} {
    return mappingTable
        .reduce((acc, mapping) => {
            const mappings = mapping.unitNames
                .reduce((acc2, unitName) => ({
                    ...acc2,
                    [unitName]: mapping.equivelantTo,
                }), {});
            return { ...acc, ...mappings };
        }, {});
}

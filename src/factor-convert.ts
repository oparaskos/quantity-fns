export function factorConvert(a: number, initialFactor: number, targetFactor: number): number {
    return (a * initialFactor) * 1 / targetFactor;
}

export function findConversionFactor(factorsMap: {[unit: string]: number}, unit: string): number {
    if (factorsMap.hasOwnProperty(unit)) {
        return factorsMap[unit];
    } else {
        throw new Error("Unknown unit '" + unit + "'");
    }
}

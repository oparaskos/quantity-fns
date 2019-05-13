export interface IQuantity {
    quantity: number;
    unit: string;
    type: "mass" | "volume" | string;
}

export interface IQuantity {
    /**
     * @example 10 for (10g mass)
     */
    quantity: number;

    /**
     * @example "g", "ml"
     */
    unit: string;

    /**
     * @example "mass", "volume"
     */
    type: string;
}

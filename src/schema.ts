
export const IQuantitySchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://example.com/root.json",
    title: "Quantity",
    description: "A measurable real-world quantity",
    type: "object",
    required: [
        "unit",
        "type",
        "quantity",
    ],
    properties: {
        unit: {
            $id: "#/properties/unit",
            type: "string",
            title: "The unit that the value of this quantity is expressed in",
            examples: [
                "kg",
                "m",
                "in",
                "ml",
                "m^2",
            ],
        },
        type: {
            $id: "#/properties/type",
            type: "string",
            title: "The type of measurement this quantity represents",
            enum: [
                "mass",
                "volume",
                "density",
                "energy",
                "distance",
            ],
        },
        quantity: {
            $id: "#/properties/quantity",
            type: "number",
            title: "The value of this quantity",
            examples: [
                110.2,
                1,
                999,
            ],
        },
    },
};

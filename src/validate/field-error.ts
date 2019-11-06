export class FieldError extends Error {
    constructor(public metadata: {
        field?: string,
        rejected?: string,
        expectedType?: string,
        actualType?: string,
        message: string,
    }) {
        super(metadata.message);
        this.name = "FieldError";
    }
}

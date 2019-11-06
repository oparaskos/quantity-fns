export class ValidationError extends Error {
    constructor(message?: string, public causes?: string | string[] | Error[]) {
        super(message);
        this.name = "ValidationError";
        this.stack = generateStack(this.stack || "", this.causes);
    }
}
function generateStack(strStack: string, causes: undefined | string | string[] | Error[]) {
    let c;
    if (typeof causes === "string") {
        c = [causes];
    } else {
        c = (causes || []);
    }
    const causesStacks = (c as Array<string|Error>).map((v: string | Error) => {
            if (!v) {
                return "";
            }
            if (typeof v === "string") {
                return v;
            }
            return v.stack;
        });
    return strStack + "\n" + "caused by " + causesStacks.join("\ncaused by ");
}

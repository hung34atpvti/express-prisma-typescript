export class Errors extends Error {
    public status: number;

    constructor(message: string, status?: number) {
        super();
        this.status = status || 500;
        this.message = message
    }

}
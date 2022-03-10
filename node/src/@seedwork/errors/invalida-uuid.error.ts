export default class InvalidUiidError extends Error {
    constructor(message?: string) {
        super("Id must be a valid uuid");

        this.name = "INVALID_UUID_ERROR";
    }
}
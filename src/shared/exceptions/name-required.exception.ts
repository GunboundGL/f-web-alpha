import { BusinessException } from "gunbound-typescript-sdk";

export class NameRequiredException extends BusinessException {
    constructor() {
        super("Name is required");
    }
}
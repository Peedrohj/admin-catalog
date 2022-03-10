// Utils
import { v4 as uuidV4 } from 'uuid'
import { validate as uuidValidae } from "uuid"

// Errors
import InvalidUiidError from '../errors/invalida-uuid.error';

export default class UniqueEntityId {
    constructor(public readonly id?: string) {
        this.id = id || uuidV4();

        this.validate();
    }

    private validate() {
        const isValid = uuidValidae(this.id);

        if (!isValid) throw new InvalidUiidError();
    }
}
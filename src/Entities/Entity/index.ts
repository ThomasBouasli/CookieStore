import { uuid } from 'uuidv4'

export class Entity {
    public readonly id: string

    constructor(id?: string) {
        this.id = id || uuid()
    }
}

import { Payload } from './Payload';

export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor(astronaut: Payload, name: string) {
        this.massKg = astronaut.massKg;
        this.name = name;
    }
}
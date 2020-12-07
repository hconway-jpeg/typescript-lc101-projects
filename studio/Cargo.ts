import { Payload } from './Payload';

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor(astronaut: Payload, material: string) {
        this.massKg = astronaut.massKg;
        this.material = material;
    }
}
import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let itemTotal = 0;
        for (let item of items) {
            itemTotal += item.massKg;
        }
        return itemTotal;
    }
    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }
    // canAdd(item: Payload): boolean {
    //     //stuff here
    // }
    // addCargo(cargo: Cargo): boolean {
    //     //stuff here
    // }
    // addAstronaut(astronaut: Astronaut): boolean {
    //     //stuff here
    // }
}
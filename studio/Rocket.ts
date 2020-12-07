export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: object[]
    astronauts: object[]
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        //stuff here
    }
    currentMassKg(): number {
        //stuff here
    }
    canAdd(item: Payload): boolean {
        //stuff here
    }
    addCargo(cargo: Cargo): boolean {
        //stuff here
    }
    addAstronaut(astronaut: Astronaut): boolean {
        //stuff here
    }
}
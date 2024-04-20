import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private name: string) {
    this.name = name;
  }

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} parou`);
  }
}

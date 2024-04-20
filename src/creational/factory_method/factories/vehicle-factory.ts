import { Vehicle } from "../vehicles/vehicle";

export abstract class VehicleFactory {
  //Factory method
  abstract getVehicle(vechicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(customerName);
    return car;
  }
}

import { VehicleFactory } from './vehicle-factory';
import { Bicycle } from '../vehicles/Bicycle';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}

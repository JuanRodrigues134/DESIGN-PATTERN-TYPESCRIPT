import { Car } from './vehicle/car';
import { CarFactory } from '../factories/car-factory';

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle('Fusca');
fusca.pickUp('Joana');

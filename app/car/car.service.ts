import {Injectable} from 'angular2/core';
import {CARS} from './mock-cars';

@Injectable()
export class CarService {
    getCars() {
        return Promise.resolve(CARS);
    }
}

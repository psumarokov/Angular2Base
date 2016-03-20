import {Injectable} from 'angular2/core';
import {CARS} from './mock-cars';

@Injectable()
export class CarService {
    getCars() {
        return Promise.resolve(CARS);
    }

    getCar(id: number) {
        return Promise.resolve(CARS).then(
            cars => cars.filter(car => car.id === id)[0]
        );
    }
}

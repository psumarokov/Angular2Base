import { Component } from 'angular2/core';

import {Car} from './car';
import {CarService} from './car.service';

@Component({
    selector: 'top-cars',
    templateUrl: 'app/car/top-cars.html'
})
export class TopCarsComponent {

    topCars: Car[];

    constructor(private _carService: CarService) { }

    ngOnInit() {
        this._carService.getCars()
            .then(cars => this.setTopCars(cars));
    }

    setTopCars(cars) {
        this.topCars = cars.slice(1,5)
    }

    openDetails() {

    }
}

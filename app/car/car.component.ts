import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Car} from './car';
import {CarService} from './car.service';

@Component({
    templateUrl: 'app/car/car.html',
    selector: 'car-details'
})
export class CarComponent implements OnInit {
    public car: Car;

    constructor(
        private _carService: CarService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._carService.getCar(id)
            .then(car => this.car = car);
    }

    goBack() {
        window.history.back();
    }
}

import {Component, OnInit} from 'angular2/core'
import {Router} from 'angular2/router';

import {Car} from './car';
import {CarService} from './car.service';
import {CarComponent} from './car.component';

@Component({
    selector: 'car-list',
    templateUrl: 'app/car/all-cars.html',
    styleUrls: ['static/style/master.css'],
    directives: [CarComponent]
})
export class AllCarsComponent implements OnInit {

    cars: Car[];
    selectedCar: Car;

    constructor(
        private _carService: CarService,
        private _router: Router) {
    }

    ngOnInit() {
        this.initCars();
    }

    initCars() {
        this._carService.getCars().then(cars => this.setCars(cars));
    }

    setCars(cars) {
        this.cars = cars;
    }

    onSelect(car: Car) {
        this.selectedCar = car;
    }

    showDetails() {
        let link = ['Car Details', { id: this.selectedCar.id }];
        this._router.navigate(link);
    }
}

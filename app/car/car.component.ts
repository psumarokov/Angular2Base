import {Component} from 'angular2/core';
import {Car} from './car';

@Component({
    templateUrl: 'app/car/car.component.html',
    selector: 'car-details',
    inputs: ['car']
})
export class CarComponent {
    public car: Car;
}

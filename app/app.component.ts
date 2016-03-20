import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {CarService} from './car/car.service';
import {AllCarsComponent} from './car/all-cars.component';
import {TopCarsComponent} from './car/top-cars.component';
import {CarComponent} from "./car/car.component";

@Component({
    selector: 'base-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CarService, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/all-cars',
        name: 'All Cars',
        component: AllCarsComponent
    },
    {
        path: '/top-cars',
        name: 'Top Cars',
        component: TopCarsComponent,
        useAsDefault: true
    },
    {
        path: '/car-details/:id',
        name: 'Car Details',
        component: CarComponent
    }
])
export class AppComponent {
    public title = 'Tour of Cars';
}

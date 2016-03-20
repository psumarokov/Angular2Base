import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {CarService} from './car/car.service';
import {CarListComponent} from './car/car-list.component';

@Component({
    selector: 'base-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CarService, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/cars',
        name: 'Cars',
        component: CarListComponent
    }
])
export class AppComponent {
    public title = 'Tour of Cars';
}

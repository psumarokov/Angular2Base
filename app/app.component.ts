import {Component} from 'angular2/core';

import {CarListComponent} from './car/car-list.component';

@Component({
    selector: 'base-app',
    templateUrl: 'app/app.component.html',
    directives: [CarListComponent]
})
export class AppComponent {
    public title = 'Tour of Cars';
}

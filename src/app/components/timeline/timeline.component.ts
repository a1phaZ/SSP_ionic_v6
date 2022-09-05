import {Component, Input} from '@angular/core';
import {TTimeLine} from '../../models/timeline.model';

@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {

	@Input()
	list: TTimeLine[];

	constructor() {
	}

}

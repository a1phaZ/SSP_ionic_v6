import {Component, Input} from '@angular/core';
import {TTimeLine} from '../../models/timeline.model';

@Component({
	selector: 'app-timeline-item',
	templateUrl: './timeline-item.component.html',
	styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent {

	@Input()
	item: TTimeLine;

	constructor() {
	}

}

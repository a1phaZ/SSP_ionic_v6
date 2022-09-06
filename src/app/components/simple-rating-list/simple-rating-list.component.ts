import {Component, Input} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {TSimpleRatingItem} from '../../models/simple-item.model';

@Component({
	selector: 'app-simple-rating-list',
	templateUrl: './simple-rating-list.component.html',
	styleUrls: ['../list/list.component.scss','./simple-rating-list.component.scss'],
})
export class SimpleRatingListComponent extends ListComponent {
	@Input()
	list: TSimpleRatingItem[];

	constructor() {
		super();
	}

}

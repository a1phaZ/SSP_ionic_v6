import {Component} from '@angular/core';
import {SimpleListItemComponent} from '../simple-list-item/simple-list-item.component';
import {Icons} from '../../models/icons.model';

@Component({
	selector: 'app-simple-rating-list-item',
	templateUrl: './simple-rating-list-item.component.html',
	styleUrls: ['../simple-list-item/simple-list-item.component.scss','./simple-rating-list-item.component.scss'],
})
export class SimpleRatingListItemComponent extends SimpleListItemComponent{

	constructor() {
		super();
	}

	getTrendName(trend: number) {
		if (trend > 0) {
			return `custom-${Icons.trendUp}`;
		} else if (trend < 0) {
			return `custom-${Icons.trendDown}`;
		} else {
			return '';
		}
	}

}

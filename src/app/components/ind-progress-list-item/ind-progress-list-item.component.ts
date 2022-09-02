import {Component, Input} from '@angular/core';
import {ItemComponent} from '../list/item/item.component';
import {TIndicatorProgress} from '../../models/indicator-progress.model';
import {getColor} from '../../shared/utils/charts.utils';

@Component({
	selector: 'app-ind-progress-list-item',
	templateUrl: './ind-progress-list-item.component.html',
	styleUrls: ['./ind-progress-list-item.component.scss'],
})
export class IndProgressListItemComponent extends ItemComponent {

	@Input()
	item: TIndicatorProgress;

	constructor() {
		super();
	}

	prepareProgress(item) {
		return [{
			name: 'donut', count: item.progressValue, color: getColor(item.progressStatus)
		}];
	}

}

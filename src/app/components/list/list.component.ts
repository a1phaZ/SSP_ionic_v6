import {Component, Input} from '@angular/core';
import {TIndicator} from '../../models/indicator.model';
import {TOrgSelectItem} from '../../models/organization.model';
import {TIndicatorReserve} from '../../models/indicator-reserv.model';
import {TIndicatorProgress} from '../../models/indicator-progress.model';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent {
	@Input()
	list: Array<TIndicator | TOrgSelectItem | TIndicatorReserve | TIndicatorProgress>;

	@Input()
	isOpen = false;

	constructor() {
	}

	itemToggle(id) {
		const ind = this.list.find((item) => item.id === id);
		if (ind) {
			ind.isOpen = !ind.isOpen;
		}
	}

}

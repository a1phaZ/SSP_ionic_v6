import {Component, Input} from '@angular/core';
import {TIndicator} from '../../models/indicator.model';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent {
	@Input()
	list: TIndicator[];

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

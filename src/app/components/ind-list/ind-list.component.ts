import {Component, Input} from '@angular/core';
import {TIndicator} from '../../models/indicator.model';

@Component({
	selector: 'app-ind-list',
	templateUrl: './ind-list.component.html',
	styleUrls: ['./ind-list.component.scss'],
})
export class IndListComponent {
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

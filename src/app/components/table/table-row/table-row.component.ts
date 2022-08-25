import {Component, Input} from '@angular/core';
import {TRating} from '../../../models/rating.model';
import {CrisisService} from '../../../services/crisis.service';
import {TableService} from '../../../services/table.service';

@Component({
	selector: 'app-table-row',
	templateUrl: './table-row.component.html',
	styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent {

	@Input()
	item: TRating;

	@Input()
	index = 0;

	@Input()
	org: number;

	constructor(
		public crisisService: CrisisService,
		public tableService: TableService
	) {
	}

	openItem() {
		console.log(this.item);
		this.item.isOpen = !this.item.isOpen;
	}
}

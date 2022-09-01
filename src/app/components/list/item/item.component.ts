import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TIndicator} from '../../../models/indicator.model';
import {TOrgSelectItem} from '../../../models/organization.model';
import {TReserve} from '../../../models/reserv.model';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

	@Input()
	item: TIndicator | TOrgSelectItem | TReserve;

	@Output()
	itemToggle: EventEmitter<any> = new EventEmitter<any>();

	constructor() {
	}

	ngOnInit() {
	}

	onItemToggle(id) {
		this.itemToggle.emit(id);
	}

}

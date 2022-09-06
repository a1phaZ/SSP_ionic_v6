import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TIndicator} from '../../../models/indicator.model';
import {TOrgSelectItem} from '../../../models/organization.model';
import {TIndicatorReserve} from '../../../models/indicator-reserv.model';
import {TIndicatorProgress} from '../../../models/indicator-progress.model';
import {TSimpleItem, TSimpleRatingItem} from '../../../models/simple-item.model';
import {TArrayDescription} from '../../../models/array-description.model';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

	@Input()
	item: |
		TIndicator |
		TOrgSelectItem |
		TIndicatorReserve |
		TIndicatorProgress |
		TSimpleItem |
		TArrayDescription |
		TSimpleRatingItem
	;

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

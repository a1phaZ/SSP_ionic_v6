import {Component, Input} from '@angular/core';
import {ItemComponent} from '../list/item/item.component';
import {TArrayDescription} from '../../models/array-description.model';

@Component({
	selector: 'app-array-description-list-item',
	templateUrl: './array-description-list-item.component.html',
	styleUrls: ['./array-description-list-item.component.scss'],
})
export class ArrayDescriptionListItemComponent extends ItemComponent{

	@Input()
	item: TArrayDescription;

	constructor() {
		super();
	}

}

import {Component, Input} from '@angular/core';
import {ItemComponent} from '../list/item/item.component';
import {TOrgSelectItem} from '../../models/organization.model';

@Component({
	selector: 'app-org-list-item',
	templateUrl: './org-list-item.component.html',
	styleUrls: ['./org-list-item.component.scss'],
})
export class OrgListItemComponent extends ItemComponent {

	@Input()
	item: TOrgSelectItem;

	@Input()
	active: boolean;

	constructor() {
		super();
	}

}

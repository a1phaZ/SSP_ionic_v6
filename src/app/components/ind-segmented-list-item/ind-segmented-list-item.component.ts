import {Component, Input} from '@angular/core';
import {ItemComponent} from '../list/item/item.component';
import {TReserve} from '../../models/reserv.model';

@Component({
	selector: 'app-ind-segmented-list-item',
	templateUrl: './ind-segmented-list-item.component.html',
	styleUrls: ['./ind-segmented-list-item.component.scss'],
})
export class IndSegmentedListItemComponent extends ItemComponent {

	@Input()
	item: TReserve;
	@Input()
	orientation: 'vertical' | 'horizontal' = 'vertical';

	constructor() {
		super();
	}

}

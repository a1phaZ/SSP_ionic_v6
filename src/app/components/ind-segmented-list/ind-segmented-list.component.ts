import {Component, Input} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {TIndicatorReserve} from '../../models/indicator-reserv.model';

@Component({
	selector: 'app-ind-segmented-list',
	templateUrl: './ind-segmented-list.component.html',
	styleUrls: ['./ind-segmented-list.component.scss', '../list/list.component.scss'],
})
export class IndSegmentedListComponent extends ListComponent{

	@Input()
	list: TReserve[];

	constructor() {
		super();
	}

}

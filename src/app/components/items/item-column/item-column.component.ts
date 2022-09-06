import {Component, Input} from '@angular/core';
import {TBlockColumnInfo} from '../../../models/blocks.model';

@Component({
	selector: 'app-item-column',
	templateUrl: './item-column.component.html',
	styleUrls: ['./item-column.component.scss'],
})
export class ItemColumnComponent {

	@Input()
	item: TBlockColumnInfo;

	constructor() {
	}

}

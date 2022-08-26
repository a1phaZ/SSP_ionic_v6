import {Component} from '@angular/core';
import {ItemComponent} from '../list/item/item.component';

@Component({
	selector: 'app-ind-list-item',
	templateUrl: './ind-list-item.component.html',
	styleUrls: ['./ind-list-item.component.scss'],
})
export class IndListItemComponent extends ItemComponent {
	constructor() {
		super();
	}

//	TODO Добавить обработчики перехода на детальную информацию по показателю
}

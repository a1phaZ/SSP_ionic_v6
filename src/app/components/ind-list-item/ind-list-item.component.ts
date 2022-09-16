import {Component} from '@angular/core';
import {ItemComponent} from '../list/item/item.component';
import {CrisisService} from '../../services/crisis.service';

@Component({
	selector: 'app-ind-list-item',
	templateUrl: './ind-list-item.component.html',
	styleUrls: ['./ind-list-item.component.scss'],
})
export class IndListItemComponent extends ItemComponent {
	constructor(
		public crisisService: CrisisService
	) {
		super();
	}

//	TODO Добавить обработчики перехода на детальную информацию по показателю
}

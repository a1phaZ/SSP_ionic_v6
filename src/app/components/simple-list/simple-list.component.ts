import {Component, Input} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {TSimpleItem} from '../../models/simple-item.model';

@Component({
	selector: 'app-simple-list',
	templateUrl: './simple-list.component.html',
	styleUrls: ['../list/list.component.scss','./simple-list.component.scss'],
})
export class SimpleListComponent extends ListComponent{

	@Input()
	list: TSimpleItem[];

	constructor() {
		super();
	}

}

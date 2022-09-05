import {Component, Input} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {TArrayDescription} from '../../models/array-description.model';

@Component({
	selector: 'app-array-description-list',
	templateUrl: './array-description-list.component.html',
	styleUrls: ['../list/list.component.scss', './array-description-list.component.scss'],
})
export class ArrayDescriptionListComponent extends ListComponent {

	@Input()
	list: TArrayDescription[];

	constructor() {
		super();
	}
}

import {Component, Input} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {TOrgSelectItem} from '../../models/organization.model';

@Component({
	selector: 'app-orgs-list',
	templateUrl: './orgs-list.component.html',
	styleUrls: ['./orgs-list.component.scss', '../list/list.component.scss'],
})
export class OrgsListComponent extends ListComponent {

	@Input()
	list: TOrgSelectItem[];

	constructor() {
		super();
	}
}

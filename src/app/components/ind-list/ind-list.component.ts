import {Component} from '@angular/core';
import {ListComponent} from '../list/list.component';

@Component({
	selector: 'app-ind-list',
	templateUrl: './ind-list.component.html',
	styleUrls: ['./ind-list.component.scss', '../list/list.component.scss'],
})
export class IndListComponent extends ListComponent {

	constructor() {
		super();
	}
}

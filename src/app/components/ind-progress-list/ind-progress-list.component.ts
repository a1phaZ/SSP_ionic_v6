import {Component, Input} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {TIndicatorProgress} from '../../models/indicator-progress.model';

@Component({
	selector: 'app-ind-progress-list',
	templateUrl: './ind-progress-list.component.html',
	styleUrls: ['./ind-progress-list.component.scss', '../list/list.component.scss'],
})
export class IndProgressListComponent extends ListComponent {

	@Input()
	list: TIndicatorProgress[];

	constructor() {
		super();
	}

}

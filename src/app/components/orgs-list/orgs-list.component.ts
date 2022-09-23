import {Component, Input} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {TOrgSelectItem} from '../../models/organization.model';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store/app.state';
import {selectDashboardSelected} from '../../../store/dashboard/dashboard.selectors';

@Component({
	selector: 'app-orgs-list',
	templateUrl: './orgs-list.component.html',
	styleUrls: ['./orgs-list.component.scss', '../list/list.component.scss'],
})
export class OrgsListComponent extends ListComponent {

	@Input()
	list: TOrgSelectItem[];

	buttonId: number;

	constructor(
		private store: Store<IAppState>,
	) {
		super();
		this.store.select(selectDashboardSelected)
			.subscribe(data => this.buttonId = data?.id || 9);
	}

	itemToggle(event) {
		if (event?.childs?.length === 0) {
			return this.onSelectItem(event);
		}
		this.list = this.list.map((item) => {
			const _item = {...item};
			if (_item.id === event.id) {
				_item.isOpen = !_item.isOpen;
			}
			return _item;
		});

	}
}

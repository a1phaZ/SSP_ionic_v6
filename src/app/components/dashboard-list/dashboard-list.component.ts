import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IDashboardState} from '../../../store/dashboard/dashboard.reducer';
import {selectButton} from '../../../store/dashboard/dashboard.actions';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent implements OnInit {

	@Input() list: any[];

	constructor(private store: Store<IDashboardState>) {
		this.store.subscribe((data) => console.log(data));
	}

    ngOnInit() {}

	selectItem(item) {
		this.store.dispatch(selectButton({item}));
	}

}

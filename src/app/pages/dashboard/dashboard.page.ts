import {Component, OnDestroy, OnInit} from '@angular/core';
import {dashboardList} from '../../shared/dashboard.const';
import {Store} from '@ngrx/store';
import {selectDashboardSelected} from '../../../store/dashboard/dashboard.selectors';
import {Observable, Subject} from 'rxjs';
import {TDashboardItem} from '../../models/dashboard.model';
import {IAppState} from '../../../store/app.state';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Icons} from '../../models/icons.model';
import {THeaderButtons} from '../../models/button.model';
import {dashboardBack} from '../../../store/dashboard/dashboard.actions';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {

	list: TDashboardItem[];

	ngUnsubscribe: Subject<any> = new Subject<any>();

	selected$: Observable<TDashboardItem>;

	headerButtons: THeaderButtons;

	constructor(
		private store: Store<IAppState>,
		private router: Router,
	) {
		this.selected$ = this.store.select(selectDashboardSelected);
	}

	ngOnInit() {
		this.selected$
			.pipe(
				takeUntil(this.ngUnsubscribe),
			)
			.subscribe(item => {
				this.list = this.getItems(item?.id);
				this.headerButtons = this.getHeaderButtons(item);
				if (!item) {
					return;
				}

				if (item?.path) {
					this.router.navigate(['dashboard', item.parentId, item.id, item.path]);
				} else {
					this.router.navigate(['dashboard', item.id]);
				}
			});

	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

	getItems(id: number): TDashboardItem[] {
		const item = dashboardList.find((_item) => _item.id === id);
		if (!item) {
			return dashboardList.filter(button => button.isChild === false);
		} else {
			return dashboardList.filter(({parentId}) => parentId === item.id);
		}
	}

	getHeaderButtons(item) {
		return item ? {left: [{name: Icons.back}]} : {left: []};
	}

	buttonsHandle(button: string) {
		switch (button) {
			case Icons.back: {
				this.store.dispatch(dashboardBack());
				return;
			}
			default:
				return;
		}
	}

}

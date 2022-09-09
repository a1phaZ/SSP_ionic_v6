import {Component, OnDestroy, OnInit} from '@angular/core';
import {dashboardList} from '../../shared/dashboard.const';
import {Store} from '@ngrx/store';
import {selectDashboardPrevSelected, selectDashboardSelected} from '../../../store/dashboard/dashboard.selectors';
import {Observable, Subject} from 'rxjs';
import {TDashboardItem} from '../../models/dashboard.model';
import {IAppState} from '../../../store/app.state';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {

	list: TDashboardItem[];

	ngUnsubscribe: Subject<any> = new Subject<any>();

	selected$: Observable<TDashboardItem>;
	prevSelected$: Observable<TDashboardItem>;

	constructor(
		private store: Store<IAppState>,
		private router: Router,
	) {
		this.selected$ = this.store.select(selectDashboardSelected);
		this.prevSelected$ = this.store.select(selectDashboardPrevSelected);
	}

	ngOnInit() {
		this.selected$
			.pipe(
				takeUntil(this.ngUnsubscribe)
			)
			.subscribe(item => {
				if (!item) {
					this.list = dashboardList.filter(button => button.isChild === false);
				} else {
					this.list = dashboardList.filter(({parentId}) => parentId === item.id);
				}

				if (item?.path) {
					this.router.navigate(['dashboard', item.id, item.path]);
				}
			});
		this.prevSelected$
			.pipe(
				takeUntil(this.ngUnsubscribe)
			)
			.subscribe(item => console.log(item));
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

}

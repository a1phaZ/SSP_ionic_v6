import {Component, OnInit} from '@angular/core';
import {EQualificationDetailMethods} from '../../../models/qualification.model';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {WebApiService} from '../../../services/web-api.service';
import {DetailBasePage} from '../detail-base/detail-base.page';
import {selectQualificationPersonDetailRequest} from '../../../../store/qualification/qualification.selector';
import {map, mergeMap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {setQualificationPeriod} from '../../../../store/qualification/qualification.actions';

@Component({
	selector: 'app-detail-motivation',
	templateUrl: './detail-motivation.page.html',
	styleUrls: ['./detail-motivation.page.scss'],
})
export class DetailMotivationPage extends DetailBasePage implements OnInit {
	method = EQualificationDetailMethods.getMotivation;

	barItems: { id: number; title: string }[] = BAR_ITEMS;
	selected: BehaviorSubject<number> = new BehaviorSubject<number>(new Date().getMonth());

	constructor(
		public route: ActivatedRoute,
		public store: Store<IAppState>,
		public webApi: WebApiService
	) {
		super(route, store, webApi);
	}

	ngOnInit() {
		this.init();
	}

	init() {
		this.data$ = this.store
			.pipe(
				select(selectQualificationPersonDetailRequest(this.method)),
				mergeMap(data => this.makeRequest(data)),
				map((data: any) => ([
					{
						periodId: 3,
						periodName: 'Месяц',
						values: data.month_str
					},
					{
						periodId: 6,
						periodName: 'Год',
						values: data.year_str
					}
				]))
			);
	}

	onBarChange($event: number) {
		this.store.dispatch(setQualificationPeriod({
			method: this.method,
			periodValue: $event + 1,
		}));
		this.selected.next($event);
	}
}

const BAR_ITEMS = [
	{
		id: 0,
		title: 'Янв'
	},
	{
		id: 1,
		title: 'Фев'
	},
	{
		id: 2,
		title: 'Мар'
	},
	{
		id: 3,
		title: 'Апр'
	},
	{
		id: 4,
		title: 'Май'
	},
	{
		id: 5,
		title: 'Июн'
	},
	{
		id: 6,
		title: 'Июл'
	},
	{
		id: 7,
		title: 'Авг'
	},
	{
		id: 8,
		title: 'Сен'
	},
	{
		id: 9,
		title: 'Окт'
	},
	{
		id: 10,
		title: 'Ноя'
	},
	{
		id: 11,
		title: 'Дек'
	}
];

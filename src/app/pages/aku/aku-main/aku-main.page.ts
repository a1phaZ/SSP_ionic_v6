import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ApiModel} from '../../../models/api.model';
import {WebApiService} from '../../../services/web-api.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {selectAvailableTypes} from '../../../../store/dashboard/dashboard.selectors';
import {map, switchMap, takeUntil} from 'rxjs/operators';
import {TTableColumn, TTableRow} from '../../../models/table.model';
import {EAkuTabsModel, EAkuTabsNames} from '../aku-tabs/aku-tabs.model';
import {EAvailableOrgs} from '../../../models/organization.model';

@Component({
	selector: 'app-aku-main',
	templateUrl: './aku-main.page.html',
	styleUrls: ['./aku-main.page.scss'],
})
export class AkuMainPage implements OnInit, OnDestroy {

	barItems: Array<{ id: number; title: string }>;
	selected: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	ngUnsubscribe: Subject<any> = new Subject<any>();
	rating: any;

	tableColumns: TTableColumn[] = [
		{
			name: 'dc',
			title: 'Станция'
		},
		{
			name: EAkuTabsModel.finance,
			title: EAkuTabsNames.finance
		},
		{
			name: EAkuTabsModel.opa,
			title: EAkuTabsNames.opa,
		},
		{
			name: EAkuTabsModel.service,
			title: EAkuTabsNames.service,
		},
	];
	tableRows$: Observable<TTableRow[]>;

	constructor(
		private webApi: WebApiService,
		private store: Store<IAppState>,
	) {
		this.store.pipe(
			select(selectAvailableTypes),
			takeUntil(this.ngUnsubscribe)
		).subscribe((data: Array<{ id: number; title: string; order?: number }>) => {
			this.barItems = data;
			const selected = data.find((item) => item.order === 1)?.id || data[0]?.id;
			this.onBarChange(selected);
		});

		this.tableRows$ = this.selected.pipe(
			takeUntil(this.ngUnsubscribe),
			switchMap((selected) => this.makeRequest({
				start: true,
				user: 1362,
				sortField: 'dc',
				sortOrder: 'asc',
				isDivision: selected === EAvailableOrgs.division ? 1 : 0,
			})),
			map((response: { orgs: any[] }) => response.orgs.map((item) => this.serializeAKUOrgs(item))),
		);
	}

	ngOnInit() {
	}

	makeRequest(data) {
		return this.webApi
			.get$(ApiModel.aku, data);
	}

	onBarChange($event: number) {
		this.selected.next($event);
	}

	serializeAKUOrgs(item: any): TTableRow {
		return {
			id: item.id,
			name: item.name,
			data: [
				{
					value: item.fin_months,
					color: item.fin_color,
				},
				{
					value: item.opa_months,
					color: item.opa_color,
				},
				{
					value: item.spus_months,
					color: item.spus_color,
				},
			]
		};
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}

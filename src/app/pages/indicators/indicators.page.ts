import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebApiService} from '../../services/web-api.service';
import {ApiModel} from '../../models/api.model';
import {TIndicator, TIndicatorStore} from '../../models/indicator.model';
import {map, mergeMap, scan, switchMap, takeUntil} from 'rxjs/operators';
import {from, Observable, Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store/app.state';
import {IndicatorsService} from '../../services/indicators.service';
import {selectCurrentDirection} from '../../../store/directions/directions.selectors';
import {selectIndicatorsPageState} from '../../../store/app.selectors';
import {ModalController} from '@ionic/angular';
import {SelectComponent} from '../../components/modals/select/select.component';
import {initializeOrgs, setOrganizationList} from '../../../store/organizations/organizations.actions';
import {ORGS_LIST} from '../../components/orgs-list/orgs-list.const';
import {getPrimaryTitle, getSecondaryTitle, getTertiaryTitle} from '../../shared/utils/header.utils';

@Component({
	selector: 'app-indicators',
	templateUrl: './indicators.page.html',
	styleUrls: ['./indicators.page.scss'],
})
export class IndicatorsPage implements OnInit, OnDestroy {

	indicators$: Observable<TIndicatorStore[]>;
	currentDirection$: Observable<number>;
	buttonId: number;

	titles: {
		primary: string;
		secondary?: string;
		tertiary?: string;
	} = {primary: ''};
	private ngUnsubscribe: Subject<any> = new Subject<any>();

	constructor(
		private route: ActivatedRoute,
		private webApi: WebApiService,
		private store: Store<IAppState>,
		public indicatorService: IndicatorsService,
		private modalCtrl: ModalController,
	) {
		this.route.params.subscribe((params) => {
			this.buttonId = Number(params.buttonId);
		});

		this.currentDirection$ = this.store.select(selectCurrentDirection);


		// TODO Перенести в авторизацию
		this.store.dispatch(setOrganizationList({list: ORGS_LIST}));

	}

	ngOnInit() {
		this.store.dispatch(initializeOrgs({buttonId: this.buttonId}));



		this.indicators$ = this.store.select(selectIndicatorsPageState).pipe(
			takeUntil(this.ngUnsubscribe),
			switchMap((data) => {
				this.titles = {
					primary: getPrimaryTitle(this.buttonId),
					secondary: getSecondaryTitle(data.organization),
					tertiary: getTertiaryTitle(data.directions.directionsList, data.directions.currentDirection),
				};
				const requestData = data
					.directions
					.directionsList
					.map(({id}) => ({
						user: 1362,
						periodName: data.period.periodId,
						periodValue: data.period.periodValue,
						periodYear: data.period.periodYear,
						org: data.organization.id,
						isGroup: false,
						podr: 0,
						brand: 0,
						// mode: 'op1',
						directions: id,
						objectId: data.organization.id,
						objectType: data.organization.orgType,
					}));
				return from(requestData).pipe(
					mergeMap(r => this.makeRequest(r)),
					map(
						(response: {
							[key: string]: any;
							status: string;
							data: any;
						}) => ({
							direction: +response.direction,
							data: response.data.map((item) => this.serializeIndicator(item))
						})),
					scan((inds: TIndicatorStore[], response: TIndicatorStore) => inds.concat(response), []),
				);
			}),
		);

		this.indicators$.subscribe((data) => this.indicatorService.indicators$.next(data));
	}

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.getIndList, data);
	}

	serializeIndicator(item: any): TIndicator {
		return {
			id: item.id_tpl,
			isOpen: false,
			childs: item.childs,
			mode: 'standard', //?
			test: item.test,
			title: item.title,
			plan: {
				sum: item.number_pln,
				viewSum: item.pln_mobile,
				complete: item.val_ptl_pct,
				completeStatus: item.state,
			},
			fact: {
				viewSum: item.fakt_mobile,
				sum: item.number_fakt
			},
			units: item.unit
		};
	}

	ngOnDestroy(): void {
		console.warn('Indicators page destroy');
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

	async selectModalOpen(event) {
		const modal = await this.modalCtrl.create({
			component: SelectComponent,
			componentProps: {
				buttonId: this.buttonId,
				data: event
			}
		});
		modal.present();
	}

}

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../services/web-api.service';
import {ApiModel} from '../../models/api.model';
import {TIndicator, TIndicatorStore} from '../../models/indicator.model';
import {map, mergeMap, scan, takeUntil} from 'rxjs/operators';
import {from, Observable, of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../store/app.state';
import {IndicatorsService} from '../../services/indicators.service';
import {selectIndicatorsPageState} from '../../../store/app.selectors';
import {ModalController} from '@ionic/angular';
import {SelectComponent} from '../../components/modals/select/select.component';
import {initializeOrgs, setOrganizationList} from '../../../store/organizations/organizations.actions';
import {ORGS_LIST} from '../../components/orgs-list/orgs-list.const';
import {getPrimaryTitle, getSecondaryTitle, getTertiaryTitle} from '../../shared/utils/header.utils';
import {Icons} from '../../models/icons.model';
import {CrisisService} from '../../services/crisis.service';
import {THeaderButtons} from '../../models/button.model';
import {NavigationService} from '../../services/navigation.service';
import {dashboardBack} from '../../../store/dashboard/dashboard.actions';
import {BasePage} from '../base/base.page';
import {serializeIndicator} from '../../shared/utils/indicator.utils';

@Component({
	selector: 'app-indicators',
	templateUrl: './indicators.page.html',
	styleUrls: ['./indicators.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndicatorsPage extends BasePage implements OnInit, OnDestroy {

	indicators$: Observable<TIndicatorStore[]>;
	currentDirection$: Observable<number>;
	buttonId: number;

	titles: {
		primary: string;
		secondary?: string;
		tertiary?: string;
	} = {primary: ''};

	// private ngUnsubscribe: Subject<any> = new Subject<any>();

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public indicatorService: IndicatorsService,
		public modalCtrl: ModalController,
		public crisisService: CrisisService,
		public navigation: NavigationService,
		private cdr: ChangeDetectorRef,
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
		// this.route.params.subscribe((params) => {
		// 	console.log(params);
		// 	this.buttonId = Number(params.buttonId);
		// });
		//
		// this.currentDirection$ = this.store.select(selectCurrentDirection);


		// TODO Перенести в авторизацию
		this.store.dispatch(setOrganizationList({list: ORGS_LIST}));

	}

	ngOnInit() {
		this.store.dispatch(initializeOrgs({buttonId: this.buttonId}));

		this.indicators$ = this.store.pipe(
			select(selectIndicatorsPageState),
			takeUntil(this.ngUnsubscribe),
			mergeMap((data) => {
				this.titles = {
					primary: getPrimaryTitle(this.buttonId),
					secondary: getSecondaryTitle(data.organization),
					tertiary: getTertiaryTitle(data.directions.directionsList, data.directions.currentDirection),
				};
				if (!data.period) {
					return of([]);
				}
				const requestData = data
					.directions
					.directionsList
					.map(({id}) => ({
						user: 1362,
						periodName: data.period?.periodId,
						periodValue: data.period?.periodValue,
						periodYear: data.period?.periodYear,
						org: data.organization.id,
						isGroup: false,
						podr: 0,
						brand: 0,
						// mode: 'op1',
						directions: id,
						objectId: data.organization.id,
						objectType: data.organization.orgType,
					}));
				// this.indicatorService.indicators$.next([]);
				return from(requestData).pipe(
					mergeMap(r => this.makeRequest(r)),
					map(
						(response: {
							[key: string]: any;
							status: string;
							data: any;
						}) => ({
							direction: +response.direction,
							data: response.data.map((item) => serializeIndicator(item))
						})),
					scan((inds: TIndicatorStore[], response: TIndicatorStore) => inds.concat(response), []),
				);
			}),
		);

		this.indicators$.subscribe((data) => {
			this.indicatorService.indicators$.next(data);
			this.cdr.detectChanges();
		});
	}

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.getIndList, data);
	}

	ngOnDestroy(): void {
		console.warn('Indicators page destroy');
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

	buttonsHandle(button: string) {
		switch (button) {
			case Icons.filter: {
				return this.selectModalOpen();
			}
			case Icons.filterCrisis: {
				this.crisisService.setFilter();
				return;
			}
			case Icons.back: {
				this.navigation.back();
				this.ngOnDestroy();
				this.store.dispatch(dashboardBack());
				return;
			}
			default:
				return;
		}
	}

	async selectModalOpen() {
		const modal = await this.modalCtrl.create({
			component: SelectComponent,
			componentProps: {
				buttonId: this.buttonId,
			}
		});
		modal.present();
	}

	initializeHeaderButtons(): THeaderButtons {
		return {
			right: [
				{name: Icons.filterCrisis, cssClass: this.crisisService.value && 'bad'},
				{name: Icons.filter}
			],
			left: [
				{name: Icons.back}
			]
		};
	}

	async showItemDetails(indicator: TIndicator) {
		await this.router.navigate([this.navigation.lastUrl, indicator.id]);
	}
}

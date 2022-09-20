import {AfterViewInit, Component, OnInit} from '@angular/core';
import {THeaderButtons} from '../../../models/button.model';
import {Icons} from '../../../models/icons.model';
import {SelectComponent} from '../../../components/modals/select/select.component';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../../services/navigation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {selectAppDashboard, selectIndicatorDetailsState} from '../../../../store/app.selectors';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {TIndicatorDetails} from '../../../models/indicator.model';
import {ApiModel} from '../../../models/api.model';
import {DetailsService} from '../../../services/details.service';
import {setDetails} from '../../../../store/details/details.actions';

@Component({
	selector: 'app-indicator-tabs',
	templateUrl: './indicator-tabs.page.html',
	styleUrls: ['./indicator-tabs.page.scss'],
})
export class IndicatorTabsPage implements OnInit, AfterViewInit {
	indId: number;

	titles: {
		primary: string;
		secondary?: string;
		tertiary?: string;
	} = {primary: 'Загрузка показателя'};

	private buttonId: number;
	private ngUnsubscribe: Subject<any> = new Subject<any>();

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public modalCtrl: ModalController,
		public navigation: NavigationService,
		public detailsService: DetailsService,
	) {
		this.route.params.subscribe((params) => {
			this.indId = Number(params.id);
		});

		this.store.pipe(
			select(selectAppDashboard),
			tap(({selected}) => this.buttonId = selected?.id)
		).subscribe();
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		// this.detailsService.details$ = this.store.select(selectIndicatorDetailsState).pipe(
		this.store.select(selectIndicatorDetailsState).pipe(
			takeUntil(this.ngUnsubscribe),
			tap(data => {
				this.titles.secondary = data.organization.title;
			}),
			switchMap((data) => this.makeRequest({
				user: 1362,
				org: data.organization.id,
				podr: 0,
				ind: this.indId,
				showPeriodDate: true,
				curDay: data.currentDate.currentDate.split('T')[0].split('-').reverse().join('-'),
				periodYear: data.period.periodYear,
				periodValue: data.period.periodValue,
				periodName: data.period.periodId,
				brand: 0,
				objectId: data.organization.id,
				objectType: data.organization.orgType,
			}) as Observable<TIndicatorDetails>),
			tap(response => {
				this.titles.primary = response.indInfo.title;
				this.store.dispatch(setDetails({buttonId: this.buttonId, details: response}));
			})
		).subscribe();
	}

	initializeHeaderButtons(): THeaderButtons {
		return {
			right: [
				{name: Icons.filter}
			],
			left: [
				{name: Icons.back}
			]
		};
	}

	buttonsHandle(button: string) {
		switch (button) {
			case Icons.filter: {
				return this.selectModalOpen();
			}
			case Icons.back: {
				this.navigation.back();
				// this.ngOnDestroy();
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

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.getIndicatorDetails, data);
	}

}

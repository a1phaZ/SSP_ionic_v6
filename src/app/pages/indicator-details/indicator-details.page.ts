import {Component, OnInit} from '@angular/core';
import {THeaderButtons} from '../../models/button.model';
import {Icons} from '../../models/icons.model';
import {SelectComponent} from '../../components/modals/select/select.component';
import {BasePage} from '../base/base.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store/app.state';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../services/navigation.service';
import {Observable} from 'rxjs';
import {TIndicatorDetails} from '../../models/indicator.model';
import {selectIndicatorDetailsState} from '../../../store/app.selectors';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {ApiModel} from '../../models/api.model';

@Component({
	selector: 'app-indicator-details',
	templateUrl: './indicator-details.page.html',
	styleUrls: ['./indicator-details.page.scss'],
})
export class IndicatorDetailsPage extends BasePage implements OnInit {

	indicator$: Observable<TIndicatorDetails>;
	indId: number;

	titles: {
		primary: string;
		secondary?: string;
		tertiary?: string;
	} = {primary: 'Загрузка показателя'};

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public modalCtrl: ModalController,
		public navigation: NavigationService
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
		this.route.params.subscribe(({id}) => this.indId = Number(id));
	}

	ngOnInit() {
		// this.store.dispatch(initializeOrgs({buttonId: this.buttonId}));

		this.indicator$ = this.store.select(selectIndicatorDetailsState(this.buttonId)).pipe(
			takeUntil(this.ngUnsubscribe),
			tap(data => {
				console.log(data);
				// this.titles.secondary = data.organization.title;
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
			})
		);
	}

	buttonsHandle(button: string) {
		switch (button) {
			case Icons.filter: {
				return this.selectModalOpen();
			}
			case Icons.back: {
				this.navigation.back();
				this.ngOnDestroy();
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
				{name: Icons.filter}
			],
			left: [
				{name: Icons.back}
			]
		};
	}

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.getIndicatorDetails, data);
	}

}

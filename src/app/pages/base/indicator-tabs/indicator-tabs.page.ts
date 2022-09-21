import {Component, OnInit} from '@angular/core';
import {THeaderButtons} from '../../../models/button.model';
import {Icons} from '../../../models/icons.model';
import {SelectComponent} from '../../../components/modals/select/select.component';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../../services/navigation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {selectIndicatorDetailsState} from '../../../../store/app.selectors';
import {map, tap} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {ApiModel} from '../../../models/api.model';
import {DetailsService} from '../../../services/details.service';
import {getDetails} from '../../../../store/details/details.actions';
import {selectDetailsViewState} from '../../../../store/details/details.selectors';

@Component({
	selector: 'app-indicator-tabs',
	templateUrl: './indicator-tabs.page.html',
	styleUrls: ['./indicator-tabs.page.scss'],
})
export class IndicatorTabsPage implements OnInit {
	indId: number;

	titles: {
		primary: string;
		secondary?: string;
		tertiary?: string;
	} = {primary: 'Загрузка показателя'};

	private buttonId: number;

	// private ngUnsubscribe: Subject<any> = new Subject<any>();


	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public modalCtrl: ModalController,
		public navigation: NavigationService,
		public detailsService: DetailsService,
	) {
		combineLatest(
			[
				this.store.select(selectIndicatorDetailsState),
				this.route.params
			]
		).pipe(
			map(data => data.reduce((acc, cur) => ({...acc, ...cur}), {})),
			tap(data => {
				this.titles.secondary = data.organization.title;
				this.store.dispatch(getDetails({
					data: this.getData({...data, indId: Number(data['id'])})
				}));
			}),
		).subscribe();

		this.store.select(selectDetailsViewState).subscribe(({titles, buttonId}) => {
			this.buttonId = buttonId;
			this.titles = titles;
		});
	}

	ngOnInit() {

	}

	getData<B>(data: any) {
		return {
			user: 1362,
			org: data.organization.id,
			podr: 0,
			ind: data.indId,
			showPeriodDate: true,
			curDay: data.currentDate.currentDate.split('T')[0].split('-').reverse().join('-'),
			periodYear: data.period.periodYear,
			periodValue: data.period.periodValue,
			periodName: data.period.periodId,
			brand: 0,
			objectId: data.organization.id,
			objectType: data.organization.orgType,
		};
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

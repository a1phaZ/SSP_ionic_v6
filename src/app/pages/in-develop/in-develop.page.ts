import {Component, OnInit} from '@angular/core';
import {BasePage} from '../base/base.page';
import {THeaderButtons} from '../../models/button.model';
import {Icons} from '../../models/icons.model';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store/app.state';
import {IndicatorsService} from '../../services/indicators.service';
import {ModalController} from '@ionic/angular';
import {CrisisService} from '../../services/crisis.service';
import {NavigationService} from '../../services/navigation.service';

@Component({
	selector: 'app-in-develop',
	templateUrl: './in-develop.page.html',
	styleUrls: ['./in-develop.page.scss'],
})
export class InDevelopPage extends BasePage implements OnInit {

	titles: {
		primary: string;
		secondary?: string;
		tertiary?: string;
	} = {primary: ''};
	buttons: THeaderButtons;

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public indicatorService: IndicatorsService,
		public modalCtrl: ModalController,
		public crisisService: CrisisService,
		public navigation: NavigationService,
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
	}

	ngOnInit() {
		this.buttons = this.initializeHeaderButtons();
		this.titles.primary = 'Раздел в разработке';
	}

	buttonsHandle(button: string) {
		switch (button) {
			case Icons.back: {
				this.navigation.back();
				this.ngOnDestroy();
				// this.store.dispatch(dashboardBack());
				return;
			}
			default:
				return;
		}
	}

	initializeHeaderButtons(): THeaderButtons {
		return {
			right: [],
			left: [
				{name: Icons.back}
			]
		};
	}

	makeRequest(data: any) {
	}

}

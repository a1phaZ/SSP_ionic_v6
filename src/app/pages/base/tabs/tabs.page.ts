import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Icons} from '../../../models/icons.model';
import {THeaderButtons} from '../../../models/button.model';
import {getPrimaryTitle} from '../../../shared/utils/header.utils';
import {BasePage} from '../base.page';
import {WebApiService} from '../../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {IonTabs, ModalController} from '@ionic/angular';
import {NavigationService} from '../../../services/navigation.service';
import {initializeOrgs} from '../../../../store/organizations/organizations.actions';
import {TTabs} from '../../../models/tabs.model';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.page.html',
	styleUrls: ['./tabs.page.scss'],
})
export class TabsPage extends BasePage implements OnInit {
	@ViewChild('tabs') tabs: IonTabs;

	tabsList: TTabs;
	headerButtons: any;
	titles: { primary: string; secondary?: string; tertiary?: string } = {primary: ''};


	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public modalCtrl: ModalController,
		public navigation: NavigationService,
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
	}

	ngOnInit() {
		this.init();
	}

	init() {
		this.tabsList = this.route.snapshot.data.tabs;
		this.headerButtons = this.initializeHeaderButtons();
		this.store.dispatch(initializeOrgs({buttonId: this.buttonId}));

		this.titles = {
			primary: getPrimaryTitle(this.buttonId),
		};
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

	initializeHeaderButtons(): THeaderButtons {
		return {
			left: [
				{name: Icons.back}
			]
		};
	}

	makeRequest(data: any) {
	}


}

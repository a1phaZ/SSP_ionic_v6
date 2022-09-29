import {Component, OnInit} from '@angular/core';
import {TabsPage} from '../../base/tabs/tabs.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../../services/navigation.service';

@Component({
	selector: 'app-aku-tabs',
	templateUrl: '../../base/tabs/tabs.page.html',
	styleUrls: ['./aku-tabs.page.scss'],
})
export class AkuTabsPage extends TabsPage implements OnInit {

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
		super.init();
	}

}

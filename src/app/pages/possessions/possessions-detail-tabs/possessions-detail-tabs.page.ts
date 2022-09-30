import {Component, OnInit} from '@angular/core';
import {TabsPage} from '../../base/tabs/tabs.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../../services/navigation.service';
import {takeUntil, tap} from 'rxjs/operators';
import {getPossessionDetails} from '../../../../store/possessions/possessions.actions';

@Component({
	selector: 'app-possessions-detail-tabs',
	templateUrl: '../../base/tabs/tabs.page.html',
	styleUrls: ['./possessions-detail-tabs.page.scss'],
})
export class PossessionsDetailTabsPage extends TabsPage implements OnInit {

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

		this.route.params.pipe(
			takeUntil(this.ngUnsubscribe),
			tap((data) => this.store.dispatch(getPossessionDetails({getObjectDetails: true, user: 1362, id: data.id})))
		).subscribe(console.log);
	}
}

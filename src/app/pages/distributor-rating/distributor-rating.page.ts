import {Component, OnInit} from '@angular/core';
import {BasePage} from '../base/base.page';
import {THeaderButtons} from '../../models/button.model';
import {ActivatedRoute, Router} from '@angular/router';
import {IAppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../services/navigation.service';
import {WebApiService} from '../../services/web-api.service';
import {Icons} from '../../models/icons.model';
import {dashboardBack} from '../../../store/dashboard/dashboard.actions';
import {initializeOrgs} from '../../../store/organizations/organizations.actions';
import {TDistributorRating, TDistributorRatingRequest} from '../../models/distributor-rating.model';
import {ApiModel} from '../../models/api.model';
import {Observable} from 'rxjs';
import {getPrimaryTitle} from '../../shared/utils/header.utils';
import {takeUntil} from 'rxjs/operators';

@Component({
	selector: 'app-distributor-rating',
	templateUrl: './distributor-rating.page.html',
	styleUrls: ['./distributor-rating.page.scss'],
})
export class DistributorRatingPage extends BasePage implements OnInit {
	headerButtons: any;
	titles: { primary: string; secondary?: string; tertiary?: string; } = {primary: ''};

	list$: Observable<TDistributorRating[]>;

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public modalCtrl: ModalController,
		public navigation: NavigationService
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
	}

	ngOnInit() {
		this.store.dispatch(initializeOrgs({buttonId: this.buttonId}));
		this.headerButtons = this.initializeHeaderButtons();

		this.list$ = this.makeRequest({
			user: 1362,
			getRating: true,
			mode: 'dc'
		}).pipe(
			takeUntil(this.ngUnsubscribe)
		);

		this.titles = {
			primary: getPrimaryTitle(this.buttonId),
		};

		this.list$.subscribe(console.log);
	}

	buttonsHandle(button: string) {
		switch (button) {
			case Icons.filter: {
				return this.selectModalOpen();
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

	initializeHeaderButtons(): THeaderButtons {
		return {
			left: [
				{name: Icons.back}
			]
		};
	}

	makeRequest(data: TDistributorRatingRequest): Observable<TDistributorRating[]> {
		return this.webApi
			.get$(ApiModel.distributorRating, data) as Observable<TDistributorRating[]>;
	}

}

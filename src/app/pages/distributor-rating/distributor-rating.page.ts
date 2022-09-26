import {Component, OnInit} from '@angular/core';
import {BasePage} from '../base/base.page';
import {THeaderButtons} from '../../models/button.model';
import {ActivatedRoute, Router} from '@angular/router';
import {IAppState} from '../../../store/app.state';
import {select, Store} from '@ngrx/store';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../services/navigation.service';
import {WebApiService} from '../../services/web-api.service';
import {TDistributorRating, TDistributorRatingRequest} from '../../models/distributor-rating.model';
import {ApiModel} from '../../models/api.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';
import {selectAvailableTypes} from '../../../store/dashboard/dashboard.selectors';
import {EAvailableOrgs} from '../../models/organization.model';

@Component({
	selector: 'app-distributor-rating',
	templateUrl: './distributor-rating.page.html',
	styleUrls: ['./distributor-rating.page.scss'],
})
export class DistributorRatingPage extends BasePage implements OnInit {

	list$: Observable<TDistributorRating[]>;
	barItems: Array<{ id: number; title: string }>;
	selected: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public modalCtrl: ModalController,
		public navigation: NavigationService,
	) {
		super(route, router, webApi, store, modalCtrl, navigation);

		this.store.pipe(
			select(selectAvailableTypes),
			takeUntil(this.ngUnsubscribe),
		).subscribe((data: Array<{ id: number; title: string; order?: number }>) => {
			this.barItems = data;
			const selected = data.find((item) => item.order === 1)?.id || data[0]?.id;
			this.onBarChange(selected);
		});

		this.list$ = this.selected.pipe(
			takeUntil(this.ngUnsubscribe),
			switchMap((selected) => this.makeRequest({
				user: 1362,
				getRating: true,
				mode: EAvailableOrgs[selected]
			}))
		);
	}

	ngOnInit() {
	}

	buttonsHandle(button: string) {
		throw new Error('Method not implemented.');
	}

	initializeHeaderButtons(): THeaderButtons {
		throw new Error('Method not implemented.');
	}

	makeRequest(data: TDistributorRatingRequest): Observable<TDistributorRating[]> {
		return this.webApi
			.get$(ApiModel.distributorRating, data) as Observable<TDistributorRating[]>;
	}

	onBarChange($event: number) {
		this.selected.next($event);
	}
}

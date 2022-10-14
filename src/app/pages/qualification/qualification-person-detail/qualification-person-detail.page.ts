import {Component, OnInit} from '@angular/core';
import {BasePage} from '../../base/base.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {ModalController, ViewWillEnter} from '@ionic/angular';
import {NavigationService} from '../../../services/navigation.service';
import {Observable, Subject} from 'rxjs';
import {THeaderButtons} from '../../../models/button.model';
import {Icons} from '../../../models/icons.model';
import {ApiModel} from '../../../models/api.model';
import {EQualificationDetailMethods} from '../../../models/qualification.model';
import {TArrayDescription} from '../../../models/array-description.model';

@Component({
	selector: 'app-qualification-person-detail',
	templateUrl: './qualification-person-detail.page.html',
	styleUrls: ['./qualification-person-detail.page.scss'],
})
export class QualificationPersonDetailPage extends BasePage implements OnInit, ViewWillEnter {

	barItems: Array<{ id: number; title: string; method: string; description: string }>;
	selected: Subject<number> = new Subject<number>();
	userId: number;

	list$: Observable<TArrayDescription[]>;

	method: string;
	response$: Observable<any>;

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public modalCtrl: ModalController,
		public navigation: NavigationService,
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
		this.headerButtons = this.initializeHeaderButtons();
		this.barItems = [
			{
				id: 0,
				method: EQualificationDetailMethods.loadQualificationUserFullInfo,
				title: 'Квалификация',
				description: 'История квалификации'
			}, {
				id: 1,
				method: EQualificationDetailMethods.getCareer,
				title: 'Карьера',
				description: 'Карьера'
			}, {
				id: 2,
				method: EQualificationDetailMethods.getMotivation,
				title: 'Оплата труда',
				description: 'Оплата труда'
			}, {
				id: 3,
				method: EQualificationDetailMethods.getMemo,
				title: 'Памятка',
				description: 'Памятка о расчете мотивации'
			}
		];

		this.userId = Number(this.route.snapshot.paramMap.get('userId'));
	}

	ngOnInit() {
		// this.response$ = this.selected.pipe(
		// 	mergeMap((barId) => {
		// 		const item = this.findBarItem(barId);
		// 		this.method = item.method;
		// 		return this.store.select(selectQualificationPersonDetailRequest(this.userId, item.method));
		// 	}),
		// 	mergeMap((data) => {
		// 		if (!data) {return of(null);}
		// 		return this.makeRequest(data);
		// 	})
		// );
		// this.list$ = this.store.pipe(
		// 	takeUntil(this.ngUnsubscribe),
		// 	select(selectQualificationRatingPostAsList(this.userId))
		// );
	}

	buttonsHandle(button: string) {
		switch (button) {
			case Icons.back: {
				this.navigation.back();
				return;
			}
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
		return this.webApi
			.get$(ApiModel.qualification, data);
	}

	onBarChange($event: number) {
		const item = this.findBarItem($event);
		if (item) {
			this.titles.primary = item.description;
		}

		const cleanUrl = this.router.url.split('?')[0].split('/(')[0];
		this.router.navigate([cleanUrl, {outlets: {detail: [item.method]}}])
			.then(() => this.selected.next($event));
	}

	ionViewWillEnter(): void {
		this.onBarChange(1);
	}

	findBarItem(barId: number) {
		return this.barItems.find(({id}) => id === barId);
	}

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasePage} from '../../base/base.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../../services/navigation.service';
import {THeaderButtons} from '../../../models/button.model';
import {getPrimaryTitle} from '../../../shared/utils/header.utils';
import {Icons} from '../../../models/icons.model';
import {
	selectQualificationPost,
	selectQualificationPostList,
	selectQualificationRatingDescription,
	selectQualificationRatingPostList
} from '../../../../store/qualification/qualification.selector';
import {switchMap, takeUntil} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiModel} from '../../../models/api.model';
import {TArrayDescription} from '../../../models/array-description.model';
import {
	getQualificationPostList,
	getQualificationPostListSuccess, setQualificationPerson
} from '../../../../store/qualification/qualification.actions';
import {TQualificationPostListRequest} from '../../../models/qualification.model';
import {TSimpleRatingItem} from '../../../models/simple-item.model';

@Component({
	selector: 'app-qualification-post-list',
	templateUrl: './qualification-post-list.page.html',
	styleUrls: ['./qualification-post-list.page.scss'],
})
export class QualificationPostListPage extends BasePage implements OnInit, OnDestroy {

	list$: Observable<TArrayDescription[]>;
	ratingList$: Observable<TSimpleRatingItem[]>;
	description$: Observable<string>;
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
		this.headerButtons = this.initializeHeaderButtons();
		this.barItems = [
			{
				id: 0,
				title: 'Квалификация'
			},
			{
				id: 1,
				title: 'Рейтинг'
			}
		];
	}

	ngOnInit() {
		this.titles = {
			primary: 'Персонал',
			secondary: getPrimaryTitle(this.buttonId),
		};

		this.list$ = this.store.select(selectQualificationPostList).pipe(
			takeUntil(this.ngUnsubscribe)
		);

		this.ratingList$ = this.store.select(selectQualificationRatingPostList).pipe(
			takeUntil(this.ngUnsubscribe)
		);

		this.description$ = this.store.select(selectQualificationRatingDescription).pipe(
			takeUntil(this.ngUnsubscribe)
		);

		this.route.params
			.pipe(
				takeUntil(this.ngUnsubscribe),
				switchMap(({postId}) => this.store.select(selectQualificationPost(Number(postId)))),
			)
			.subscribe((data: TQualificationPostListRequest) =>
				this.store.dispatch(getQualificationPostList({data}))
			);
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
		this.selected.next($event);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		this.store.dispatch(getQualificationPostListSuccess({list: []}));
	}

	selectItem($event: number) {
		console.log($event);
		this.store.dispatch(setQualificationPerson({person: $event}));
		this.router.navigate([this.navigation.lastUrl, $event]);
	}
}

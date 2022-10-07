import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasePage} from '../../base/base.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../../services/navigation.service';
import {THeaderButtons} from '../../../models/button.model';
import {Icons} from '../../../models/icons.model';
import {ApiModel} from '../../../models/api.model';
import {chooseOrgById} from '../../../../store/organizations/organizations.actions';
import {selectCurrentOrg} from '../../../../store/organizations/organizations.selectors';
import {mergeMap, takeUntil} from 'rxjs/operators';
import {selectSecurityRatingState} from '../../../../store/app.selectors';

@Component({
	selector: 'app-security-detail',
	templateUrl: './security-detail.page.html',
	styleUrls: ['./security-detail.page.scss'],
})
export class SecurityDetailPage extends BasePage implements OnInit, OnDestroy {
	headerButtons: THeaderButtons;
	titles: { primary: string; secondary?: string; tertiary?: string } = {primary: ''};

	orgId: number;
	title: string;
	descriptionList: any[];
	content: { title: string; value: number; colorIndicator: number }[];

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public modalCtrl: ModalController,
		public navigation: NavigationService,
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
		this.orgId = Number(this.route.snapshot.params?.id);
		this.titles.primary = this.route.snapshot.data?.title;
	}

	ngOnInit() {
		this.headerButtons = this.initializeHeaderButtons();
		this.store
			.pipe(
				takeUntil(this.ngUnsubscribe),
				select(selectCurrentOrg)
			)
			.subscribe((org) => this.titles.secondary = org?.title);

		this.store
			.pipe(
				select(selectSecurityRatingState),
				takeUntil(this.ngUnsubscribe),
				mergeMap(data => {
					return this.makeRequest({
						user: 1362,
						getPolyIndicatorDetail: true,
						...data
					});
				})
			)
			.subscribe((r: ISecurityDetailResponse) => {
				this.title = r.title;
				this.content = r.content;
				this.descriptionList = r.description;
				console.log(r);
			});
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

	initializeHeaderButtons(): THeaderButtons {
		return {
			left: [
				{name: Icons.back}
			],
			right: [
				{name: Icons.filter}
			]
		};
	}

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.security, data);
	}

	async ngOnDestroy() {
		console.log('destroy detail');
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
		await this.store.dispatch(chooseOrgById({buttonId: this.buttonId}));
	}

	getColorIndicator(indicator: number) {
		return ETableRowsColorIndicator[indicator];
	}
}

interface ISecurityDetailResponse {
	title: string;
	content: { title: string; value: number; colorIndicator: number }[];
	description: any[];
}

export enum ETableRowsColorIndicator {
	'excellent',
	'success',
	'enough',
	'danger',
	'average',
}

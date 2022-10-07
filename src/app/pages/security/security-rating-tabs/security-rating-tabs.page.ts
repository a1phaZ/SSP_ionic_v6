import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {TabsPage} from '../../base/tabs/tabs.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {ModalController} from '@ionic/angular';
import {NavigationService} from '../../../services/navigation.service';
import {THeaderButtons} from '../../../models/button.model';
import {Icons} from '../../../models/icons.model';
import {selectCurrentOrg} from '../../../../store/organizations/organizations.selectors';
import {takeUntil} from 'rxjs/operators';

@Component({
	selector: 'app-security-rating-tabs',
	templateUrl: '../../base/tabs/tabs.page.html',
	styleUrls: ['./security-rating-tabs.page.scss'],
})
export class SecurityRatingTabsPage extends TabsPage implements OnInit, OnDestroy, AfterViewInit {

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

		this.store.select(selectCurrentOrg)
			.pipe(
				takeUntil(this.ngUnsubscribe)
			)
			.subscribe((org) => {
				console.log(org);
				this.titles.secondary = org.title;
			});
	}

	initializeHeaderButtons(): THeaderButtons {
		return {
			left: [
				{name: Icons.back}
			],
			right: [
				// {name: Icons.filter}
			]
		};
	}

	ngAfterViewInit(): void {
		console.log(this.tabsList);
		this.tabs.ionTabsDidChange.subscribe(({tab}) => {
			this.headerButtons = {
				left: [
					...this.headerButtons.left,
					...getAdditionButtons(this.tabsList, tab, 'left')
				],
				right: [
					// ...this.headerButtons.right,
					...getAdditionButtons(this.tabsList, tab, 'right')
				]
			} as THeaderButtons;
			// this.appRef.tick();
		});
	}

}

const getAdditionButtons = (list, tab, key) => {
	const el = list.find((_tab) => _tab.path === tab);
	return el && el.buttons && el.buttons[key] ? el.buttons[key] : [];
};

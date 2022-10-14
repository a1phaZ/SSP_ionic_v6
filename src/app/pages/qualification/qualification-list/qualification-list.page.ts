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
import {getPrimaryTitle} from '../../../shared/utils/header.utils';
import {ApiModel} from '../../../models/api.model';
import {Observable} from 'rxjs';
import {TSimpleItem} from '../../../models/simple-item.model';
import {testSelector} from '../../../../store/qualification/qualification.selector';
import {getQualificationList, resetQualificationList} from '../../../../store/qualification/qualification.actions';

@Component({
	selector: 'app-qualification-list',
	templateUrl: './qualification-list.page.html',
	styleUrls: ['./qualification-list.page.scss'],
})
export class QualificationListPage extends BasePage implements OnInit, OnDestroy {

	// headerButtons: any;
	// titles: { primary: string; secondary?: string; tertiary?: string } = {primary: ''};
	list$: Observable<TSimpleItem[]>;

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
	}

	ngOnInit() {
		this.titles = {
			primary: 'Персонал',
			secondary: getPrimaryTitle(this.buttonId),
		};

		this.store.dispatch(getQualificationList());

		this.list$ = this.store.pipe(
			select(testSelector)
		);
	}

	selectItem(event) {
		console.log(event);
		this.router.navigate([this.navigation.lastUrl, event.id]);
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

	ngOnDestroy() {
		super.ngOnDestroy();
		this.store.dispatch(resetQualificationList());
	}

}

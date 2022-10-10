import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasePage} from '../../base/base.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {IndicatorsService} from '../../../services/indicators.service';
import {ModalController} from '@ionic/angular';
import {CrisisService} from '../../../services/crisis.service';
import {NavigationService} from '../../../services/navigation.service';
import {THeaderButtons} from '../../../models/button.model';
import {of} from 'rxjs';
import {mergeMap, takeUntil} from 'rxjs/operators';
import {ApiModel} from '../../../models/api.model';
import {selectSecurityRatingState} from '../../../../store/app.selectors';

@Component({
	selector: 'app-security-dynamic',
	templateUrl: './security-dynamic.page.html',
	styleUrls: ['./security-dynamic.page.scss'],
})
export class SecurityDynamicPage extends BasePage implements OnInit, OnDestroy {
	dataChart: any;

	apiMethod: { [key: string]: boolean };

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public indicatorService: IndicatorsService,
		public modalCtrl: ModalController,
		public crisisService: CrisisService,
		public navigation: NavigationService,
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
		this.apiMethod = this.route.snapshot.data?.api?.dynamic;
	}

	ngOnInit() {
		this.store.pipe(
			select(selectSecurityRatingState),
			takeUntil(this.ngUnsubscribe),
			mergeMap((data) => {
					if (!data) {
						return of({content: [], header: []});
					}
					return this.makeRequest({
						user: 1362,
						...data,
						...this.apiMethod
					});
				}
			),
		).subscribe((r: { content: any[]; header: string[] }) => {
			if (!r) {
				return;
			}
			console.log(r);
			this.dataChart = {
				indexChart: 1,
				reversedY: false,
				ordinat: [
					'1й кв',
					'2й кв',
					'3й кв',
					'4й кв'
				],
				data: r,
			};
		});
	}

	buttonsHandle(button: string) {
	}

	initializeHeaderButtons(): THeaderButtons {
		return undefined;
	}

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.security, data);
	}

}

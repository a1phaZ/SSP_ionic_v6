import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BasePage} from '../../base/base.page';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../../../services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {IndicatorsService} from '../../../services/indicators.service';
import {ModalController} from '@ionic/angular';
import {CrisisService} from '../../../services/crisis.service';
import {NavigationService} from '../../../services/navigation.service';
import {THeaderButtons} from '../../../models/button.model';
import {combineLatest, of} from 'rxjs';
import {selectPeriodByButtonId} from '../../../../store/period-picker/period-picker.selectors';
import {selectCurrentOrg} from '../../../../store/organizations/organizations.selectors';
import {mergeMap, takeUntil} from 'rxjs/operators';
import {ApiModel} from '../../../models/api.model';

@Component({
	selector: 'app-security-dynamic',
	templateUrl: './security-dynamic.page.html',
	styleUrls: ['./security-dynamic.page.scss'],
})
export class SecurityDynamicPage extends BasePage implements OnInit, OnDestroy {
	dataChart: any;

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public webApi: WebApiService,
		public store: Store<IAppState>,
		public indicatorService: IndicatorsService,
		public modalCtrl: ModalController,
		public crisisService: CrisisService,
		public navigation: NavigationService,
		private cdr: ChangeDetectorRef,
	) {
		super(route, router, webApi, store, modalCtrl, navigation);
	}

	ngOnInit() {
		combineLatest([
			this.currentDirection$,
			this.store.select(selectPeriodByButtonId),
			this.store.select(selectCurrentOrg)
		]).pipe(
			takeUntil(this.ngUnsubscribe),
			mergeMap(([direction, period, org]) => {
				console.log(period, direction, org);
				if (!period) {
					return of({content: [], header: []});
				}
				return this.makeRequest({
					user: 1362,
					// curDay: '04-04-2022',
					periodYear: period.periodYear,
					periodValue: period.periodValue,
					periodId: period.periodId,
					periodName: period.periodId,
					orgId: org.id,
					brand: 0,
					getPolyRating: true,
					depId: direction
				});
			}),
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

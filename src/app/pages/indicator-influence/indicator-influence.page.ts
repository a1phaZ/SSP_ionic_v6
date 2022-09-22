import {ApplicationRef, Component, OnInit} from '@angular/core';
import {TIndicator} from '../../models/indicator.model';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store/app.state';
import {WebApiService} from '../../services/web-api.service';
import {getInfluence} from '../../../store/influence/influence.actions';
import {NavigationService} from '../../services/navigation.service';
import {Router} from '@angular/router';
import {selectInfluence, selectInfluenceRequest} from '../../../store/influence/influence.selectors';
import {CrisisService} from '../../services/crisis.service';
import {takeUntil} from 'rxjs/operators';

@Component({
	selector: 'app-indicator-influence',
	templateUrl: './indicator-influence.page.html',
	styleUrls: ['./indicator-influence.page.scss'],
})
export class IndicatorInfluencePage implements OnInit {

	influenceList: TIndicator[];
	private ngUnsubscribe: Subject<any> = new Subject<any>();

	constructor(
		private store: Store<IAppState>,
		private webApi: WebApiService,
		private appRef: ApplicationRef,
		private router: Router,
		private navigation: NavigationService,
		public crisisService: CrisisService,
	) {
		this.store.select(selectInfluence).pipe(
			takeUntil(this.ngUnsubscribe)
		).subscribe((data) => this.influenceList = data);
		this.store.select(selectInfluenceRequest).pipe(
			takeUntil(this.ngUnsubscribe)
		).subscribe((data) => this.store.dispatch(getInfluence({data})));
	}

	ngOnInit() {

	}

	async showItemDetails(indicator: TIndicator) {
		await this.router.navigate([this.navigation.lastUrl, indicator.id]);
	}
}

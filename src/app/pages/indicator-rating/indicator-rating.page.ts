import {ApplicationRef, Component, OnInit} from '@angular/core';
import {IAppState} from '../../../store/app.state';
import {select, Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {DetailsService} from '../../services/details.service';
import {takeUntil, tap} from 'rxjs/operators';
import {selectRatingPageState} from '../../../store/details/details.selectors';
import {ApiModel} from '../../models/api.model';
import {WebApiService} from '../../services/web-api.service';
import {TIndicatorDetailsRatingRequest} from '../../models/indicator.model';
import {TRating} from '../../models/rating.model';
import {getRating} from '../../../store/rating/rating.actions';
import {selectRating} from '../../../store/rating/rating.selectors';

@Component({
	selector: 'app-indicator-rating',
	templateUrl: './indicator-rating.page.html',
	styleUrls: ['./indicator-rating.page.scss'],
})
export class IndicatorRatingPage implements OnInit {

	rating: TRating[];
	private ngUnsubscribe: Subject<any> = new Subject<any>();

	constructor(
		private store: Store<IAppState>,
		private detailsService: DetailsService,
		private webApi: WebApiService,
		private appRef: ApplicationRef,
	) {
		this.store.select(selectRating).subscribe((rating) => {
			this.rating = rating;
			this.appRef.tick();
		});
	}

	ngOnInit() {
		this.store.pipe(
			select(selectRatingPageState),
			takeUntil(this.ngUnsubscribe),
			tap((data: TIndicatorDetailsRatingRequest) => {
				// TODO Object types
				const {id, ...body} = data;
				body.objectType = 10;
				body.typeOrg = 10;
				// return this.makeRequest(id, body);
				this.store.dispatch(getRating({data}));
			}),
		).subscribe();
	}

	makeRequest(id, data) {
		return this.webApi
			.post$(ApiModel.getIndicatorRating + id, data);
	}

}

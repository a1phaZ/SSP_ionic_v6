import {Component, OnInit} from '@angular/core';
import {IAppState} from '../../../store/app.state';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {DetailsService} from '../../services/details.service';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {selectRatingPageState} from '../../../store/details/details.selectors';
import {ApiModel} from '../../models/api.model';
import {WebApiService} from '../../services/web-api.service';
import {TIndicatorDetailsRequest} from '../../models/indicator.model';

@Component({
	selector: 'app-indicator-rating',
	templateUrl: './indicator-rating.page.html',
	styleUrls: ['./indicator-rating.page.scss'],
})
export class IndicatorRatingPage implements OnInit {

	rating$: Observable<any>;
	private ngUnsubscribe: Subject<any> = new Subject<any>();

	constructor(
		private store: Store<IAppState>,
		private detailsService: DetailsService,
		private webApi: WebApiService,
	) {
	}

	ngOnInit() {
		this.rating$ = this.store.pipe(
			select(selectRatingPageState),
			takeUntil(this.ngUnsubscribe),
			tap(console.log),
			switchMap((data: TIndicatorDetailsRequest) => {
				const {id, ...body} = data;
				body.objectType = 10;
				body.typeOrg = 10;
				return this.makeRequest(id, body);
			})
		);
		// TODO Запрос на сервер
		this.rating$.subscribe(console.log);
	}

	makeRequest(id, data) {
		return this.webApi
			.post$(ApiModel.getIndicatorRating + id, data);
	}

}

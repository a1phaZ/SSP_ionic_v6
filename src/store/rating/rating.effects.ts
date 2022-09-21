import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {WebApiService} from '../../app/services/web-api.service';
import {ApiModel} from '../../app/models/api.model';
import {ERatingActions, setRating} from './rating.actions';
import {concatMap, exhaustMap, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectButtonId} from '../app.selectors';
import {IAppState} from '../app.state';
import {TIndicatorDetailsRatingRequest} from '../../app/models/indicator.model';

@Injectable()
export class RatingEffects {

	// private common$ = combineLatest([
	// 	this.store.select(selectButtonId)
	// ]).pipe(
	// 	map(([buttonId]) => ({buttonId}))
	// );

	getRating$ = createEffect(() => this.actions$.pipe(
			ofType(ERatingActions.getRatingRequest),
			switchMap((payload: { data: TIndicatorDetailsRatingRequest }) => {
				const {id, ...body} = payload.data;
				body.objectType = 10;
				body.typeOrg = 10;
				return this.makeRequest(id, body);
			}),
			concatMap((response) => of(response).pipe(
				withLatestFrom(this.store.select(selectButtonId)),
				map(([data, b]) => ({buttonId: b, data})),
				tap(console.log)
			)),
			exhaustMap(({buttonId, data}) => of(setRating({buttonId, rating: data})))
		),
	);

	constructor(
		private actions$: Actions,
		private webApi: WebApiService,
		private store: Store<IAppState>,
	) {
	}

	makeRequest(id, data) {
		return this.webApi
			.post$(ApiModel.getIndicatorRating + id, data);
	}
}

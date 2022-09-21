import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EDetailsActions, setDetails} from './details.actions';
import {concatMap, exhaustMap, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {ApiModel} from '../../app/models/api.model';
import {WebApiService} from '../../app/services/web-api.service';
import {selectButtonId} from '../app.selectors';
import {Store} from '@ngrx/store';
import {IAppState} from '../app.state';

@Injectable()
export class DetailsEffects {

	buttonId: number;

	getDetails$ = createEffect(() => this.actions$.pipe(
		ofType(EDetailsActions.getDetailsRequest),
		switchMap((payload: { data: any }) => this.makeRequest(payload.data)),
		concatMap((response) => of(response).pipe(
			withLatestFrom(this.store.select(selectButtonId)),
			map(([data, b]) => ({buttonId: b, data})),
			tap(console.log)
		)),
		exhaustMap(({buttonId, data}) => of(setDetails({buttonId, details: data})))
	));

	constructor(
		private actions$: Actions,
		private webApi: WebApiService,
		private store: Store<IAppState>,
	) {
	}

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.getIndicatorDetails, data);
	}
}

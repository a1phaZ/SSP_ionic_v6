import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EPossessionsActions, getPossessionDetailsSuccess, getPossessionsListSuccess} from './possessions.actions';
import {exhaustMap, switchMap} from 'rxjs/operators';
import {WebApiService} from '../../app/services/web-api.service';
import {ApiModel} from '../../app/models/api.model';
import {of} from 'rxjs';
import {TPossessionsRequest} from '../../app/models/possessions.model';
import {TAccordionItemCommon} from '../../app/models/accordion.model';

@Injectable()
export class PossessionsEffects {

	getPossessions$ = createEffect(() => this.actions$.pipe(
		ofType(EPossessionsActions.getList),
		switchMap((payload: TPossessionsRequest) =>
			this.makeRequest({getObjectsList: payload.getObjectsList, user: payload.user} as TPossessionsRequest)),
		// tap(console.log),
		exhaustMap((response: TAccordionItemCommon[]) => of(getPossessionsListSuccess({list: response})))
	));

	getPossessionsDetails$ = createEffect(() => this.actions$.pipe(
		ofType(EPossessionsActions.getDetails),
		switchMap((payload: TPossessionsRequest) =>
			this.makeRequest({
				getObjectDetails: payload.getObjectDetails,
				user: payload.user,
				id: payload.id
			} as TPossessionsRequest)),
		exhaustMap((response: any) => of(getPossessionDetailsSuccess({details: response})))
	));

	constructor(
		private actions$: Actions,
		private webApi: WebApiService
	) {
	}

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.possessions, data);
	}
}

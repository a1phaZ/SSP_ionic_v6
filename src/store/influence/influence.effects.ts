import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {WebApiService} from '../../app/services/web-api.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../app.state';
import {ApiModel} from '../../app/models/api.model';
import {EInfluenceActions, setInfluence} from './influence.actions';
import {concatMap, exhaustMap, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {selectDetails} from '../details/details.selectors';
import {TIndicatorInfluenceRequest} from '../../app/models/indicator.model';
import {serializeIndicator} from '../../app/shared/utils/indicator.utils';

@Injectable()
export class InfluenceEffects {

	getInfluence$ = createEffect(() => this.actions$.pipe(
		ofType(EInfluenceActions.getInfluenceRequest),
		switchMap(({data}) => this.makeRequest(data)),
		concatMap((response: { data: any[] }) => of(response).pipe(
			withLatestFrom(
				this.store.select(selectDetails)
			),
			map(([r, d]) => ({
				list: r.data.map(item => serializeIndicator(item)),
				id: d.indInfo.id
			}))
		)),
		exhaustMap((data) => of(setInfluence({data})))
	));


	constructor(
		private actions$: Actions,
		private webApi: WebApiService,
		private store: Store<IAppState>,
	) {
	}

	makeRequest(data: TIndicatorInfluenceRequest) {
		return this.webApi
			.get$(ApiModel.getIndList, data);
	}
}

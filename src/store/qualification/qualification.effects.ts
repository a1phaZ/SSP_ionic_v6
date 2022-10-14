import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
	EQualificationActions,
	getQualificationListSuccess,
	getQualificationPostListSuccess
} from './qualification.actions';
import {ApiModel} from '../../app/models/api.model';
import {WebApiService} from '../../app/services/web-api.service';
import {exhaustMap, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class QualificationEffects {

	getQualificationList$ = createEffect(() => this.actions$.pipe(
		ofType(EQualificationActions.getList),
		mergeMap(() => this.makeRequest({
			loadQualificationPostList: true,
			user: 1362,
		})),
		exhaustMap((response: any[]) => of(getQualificationListSuccess({list: response})))
	));

	getQualificationPostList$ = createEffect(() => this.actions$.pipe(
		ofType(EQualificationActions.getPostList),
		mergeMap((data: any) => {
			console.log(data);
			return this.makeRequest(data.data);
		}),
		// mergeMap(data => of([])),
		exhaustMap((response: any[]) => of(getQualificationPostListSuccess({list: response})))
	));

	constructor(
		private actions$: Actions,
		private webApi: WebApiService,
	) {
	}

	makeRequest(data: any) {
		return this.webApi
			.get$(ApiModel.qualification, data);
	}
}

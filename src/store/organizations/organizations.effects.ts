import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {chooseOrg, EOrgsActionTypes} from './organizations.actions';
import {exhaustMap, map, mergeMap} from 'rxjs/operators';
import {combineLatest, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../app.state';
import {selectOrgById} from './organizations.selectors';
import {selectButtonId} from '../app.selectors';

@Injectable()
export class OrganizationsEffects {
	initializeOrgs$ = createEffect(() => this.actions$.pipe(
		ofType(EOrgsActionTypes.init),
		// tap(console.log),
		exhaustMap(({buttonId}) => of(chooseOrg({buttonId, org: null})))
	));

	// chooseOrgById$ = createEffect(() => this.actions$.pipe(
	// 	ofType(EOrgsActionTypes.selectOrgById),
	// 	mergeMap(({org}) => combineLatest(
	// 			[
	// 				this.store.select(selectButtonId)
	// 			]
	// 		).pipe(
	// 			map(([ b]) => ({org, buttonId: b}))
	// 		)
	// 	),
	// 	exhaustMap(({org, buttonId}) => of(chooseOrg({buttonId, org}))
	// )));

	constructor(
		private actions$: Actions,
		private store: Store<IAppState>
	) {
	}
}

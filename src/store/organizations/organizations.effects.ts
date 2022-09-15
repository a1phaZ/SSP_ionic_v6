import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {chooseOrg, EOrgsActionTypes} from './organizations.actions';
import {exhaustMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class OrganizationsEffects {
	initializeOrgs$ = createEffect(() => this.actions$.pipe(
		ofType(EOrgsActionTypes.init),
		// tap(console.log),
		exhaustMap(({buttonId}) => of(chooseOrg({buttonId, org: null})))
	));

	constructor(
		private actions$: Actions,
	) {
	}
}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ECurrentDateActions} from './current-date.actions';
import {exhaustMap} from 'rxjs/operators';
import {changePeriodValue} from '../period-picker/period-picker.actions';
import {of} from 'rxjs';

@Injectable()
export class CurrentDateEffects {

	setDate$ = createEffect(() => this.actions$.pipe(
		ofType(ECurrentDateActions.setDate),
		exhaustMap(({buttonId, date, periodId}) => of(changePeriodValue({buttonId, periodId, ...getPeriod(date, periodId)})))
	));

	constructor(
		private actions$: Actions,
	) {
	}
}

export const getPeriod = (date: string, periodId: number) => {
	const _d = new Date(date);
	const value = _d.getMonth();
	const year = _d.getFullYear();

	switch (periodId) {
		case 4: {
			return {
				periodValue: Math.floor((value + 3) / 3),
				periodYear: year,
			};
		}
		case 5: {
			return {
				periodValue: Math.floor((value + 6) / 6),
				periodYear: year,
			};
		}
		case 6: {
			return {
				periodValue: Math.floor((value + 12) / 12),
				periodYear: year,
			};
		}
		default: {
			return {
				periodValue: value + 1,
				periodYear: year,
			};
		}
	}
};

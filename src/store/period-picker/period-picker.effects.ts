import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EPeriodPickerActions} from './period-picker.actions';
import {exhaustMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {initCurrentDate} from '../current-date/current-date.actions';

@Injectable()
export class PeriodPickerEffects {

	initPeriod$ = createEffect(() => this.actions$.pipe(
		ofType(EPeriodPickerActions.init),
		exhaustMap(({buttonId, periodId, periodValue, periodYear}) => {
			// console.log(getMonth(periodId, periodValue));
			if (!periodValue) {
				return of(initCurrentDate({buttonId}));
			}
			const newDate = new Date(periodYear, getMonth(periodId, periodValue), 0, 0,0,0).toISOString();
			return of(initCurrentDate({buttonId, date: newDate}));
		})
	));

	constructor(
		private actions$: Actions
	) {
	}
}

export const getMonth = (periodId, value) => {
	switch (periodId) {
		case 4: {
			return value * 3;
		}
		case 5: {
			return value * 6;
		}
		case 6: {
			return 12;
		}
		default: {
			return value;
		}
	}
};

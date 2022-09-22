import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EPeriodPickerActions} from './period-picker.actions';
import {concatMap, exhaustMap, map, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {initCurrentDate, setCurrentDateByPeriod} from '../current-date/current-date.actions';
import {selectAppCurrentDate, selectButtonId} from '../app.selectors';
import {Store} from '@ngrx/store';
import {IAppState} from '../app.state';

@Injectable()
export class PeriodPickerEffects {

	initPeriod$ = createEffect(() => this.actions$.pipe(
		ofType(EPeriodPickerActions.init),
		concatMap((action) => of(action).pipe(
			withLatestFrom(
				this.store.select(selectButtonId),
				this.store.select(selectAppCurrentDate)
			),
			map(([data, b, cd]) => ({buttonId: b, mode: cd[b]?.mode || 'auto', data})),
		)),
		exhaustMap(({buttonId, data: {periodId, periodValue, periodYear}, mode}) => {
			if (!periodValue) {
				return of(initCurrentDate({buttonId}));
			}
			const newDate = mode === 'auto' ?
				new Date().toISOString() :
				new Date(periodYear, getMonth(periodId, periodValue), 0, 0, 0, 0).toISOString();
			return of(setCurrentDateByPeriod({buttonId, date: newDate, periodId}));
		})
	));

	changePeriod$ = createEffect(() => this.actions$.pipe(
		ofType(EPeriodPickerActions.changePeriod),
		concatMap((action) => of(action).pipe(
			withLatestFrom(
				this.store.select(selectButtonId),
			),
			map(([data, b]) => ({buttonId: b, data}))
		)),
		exhaustMap(({buttonId, data: {periodId, periodValue, periodYear}}) => {
			const newDate = new Date(periodYear, getMonth(periodId, periodValue), 0, 0, 0, 0).toISOString();
			return of(setCurrentDateByPeriod({buttonId, date: newDate, periodId}));
		})
	));

	constructor(
		private actions$: Actions,
		private store: Store<IAppState>,
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

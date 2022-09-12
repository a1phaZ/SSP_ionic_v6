import {createAction, props} from '@ngrx/store';
import {IPeriodState} from './period-picker.reducer';

export const initializePicker = createAction(
	'[Period Picker] Initialize',
	props<IPeriodState>()
);

export const prevPeriodValue = createAction(
	'[Period Picker] Prev period value',
	props<{buttonId: number}>()
);

export const nextPeriodValue = createAction(
	'[Period Picker] Next Period Value',
	props<{buttonId: number}>()
);

export const changePeriodValue = createAction(
	'[Period Picker] Change Period Value',
	props<{buttonId: number; periodValue: number; periodId: number; periodYear: number }>()
);

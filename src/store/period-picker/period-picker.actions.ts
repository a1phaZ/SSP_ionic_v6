import {createAction, props} from '@ngrx/store';
import {IPeriodState} from './period-picker.reducer';

export enum EPeriodPickerActions {
	init = '[Period Picker] Initialize',
	prevValue = '[Period Picker] Prev period value',
	nextValue = '[Period Picker] Next Period Value',
	changePeriod = '[Period Picker] Change Period Value',
	changePeriodByDate = '[Period Picker] Change Period Value By Date',
}

export const initializePicker = createAction(
	EPeriodPickerActions.init,
	props<IPeriodState>()
);

export const prevPeriodValue = createAction(
	EPeriodPickerActions.prevValue,
	props<{buttonId: number}>()
);

export const nextPeriodValue = createAction(
	EPeriodPickerActions.nextValue,
	props<{buttonId: number}>()
);

export const changePeriodValue = createAction(
	EPeriodPickerActions.changePeriod,
	props<{buttonId: number; periodValue: number; periodId: number; periodYear: number }>()
);

export const changePeriodValueByDate = createAction(
	EPeriodPickerActions.changePeriodByDate,
	props<{buttonId: number; periodValue: number; periodId: number; periodYear: number }>()
);

// TODO перенести в AppReducer
export const emptyAction = createAction(
	'[Empty',
);

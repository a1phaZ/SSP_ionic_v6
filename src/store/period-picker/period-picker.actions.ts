import {createAction, props} from '@ngrx/store';
import {IPeriodState} from './period-picker.reducer';

export enum EPeriodPickerActions {
	init = '[Period Picker] Initialize',
	prevValue = '[Period Picker] Prev period value',
	nextValue = '[Period Picker] Next Period Value',
	changePeriod = '[Period Picker] Change Period Value',
	setDate = '[Period Picker] Set Current Date',
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

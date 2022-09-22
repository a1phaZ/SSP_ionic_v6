import {createAction, props} from '@ngrx/store';

export enum ECurrentDateActions {
	init = '[Current Date] Init Current Date',
	setDate = '[Current Date] Set Current Date',
	setDateByPeriod = '[Current Date] Set Current Date By Period',
}

export const initCurrentDate = createAction(
	ECurrentDateActions.init,
	props<{buttonId: number; date?: string}>()
);

export const setCurrentDate = createAction(
	ECurrentDateActions.setDate,
	props<{buttonId: number; date: string; periodId: number}>()
);

export const setCurrentDateByPeriod = createAction(
	ECurrentDateActions.setDateByPeriod,
	props<{buttonId: number; date: string; periodId: number}>()
);

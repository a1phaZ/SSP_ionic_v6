import {createAction, props} from '@ngrx/store';

export enum ECurrentDateActions {
	init = '[Current Date] Init Current Date',
	setDate = '[Current Date] Set Current Date'
}

export const initCurrentDate = createAction(
	ECurrentDateActions.init,
	props<{buttonId: number; date?: string}>()
);

export const setCurrentDate = createAction(
	ECurrentDateActions.setDate,
	props<{buttonId: number; date: string; periodId: number}>()
);

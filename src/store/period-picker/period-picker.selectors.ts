import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {IPeriodState} from './period-picker.reducer';

export const getState = (state: IAppState) => state.periods;

export const selectPeriodByButtonId = (buttonId: number) => createSelector(
	getState,
	(state: IPeriodState[]) => state.find(({buttonId: id}) => id === buttonId)
);

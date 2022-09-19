import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {IPeriodState} from './period-picker.reducer';
import {selectAppPeriods} from '../app.selectors';

export const getState = (state: IAppState) => state.periods;

export const selectPeriodByButtonId = (button: number) => createSelector(
	// getState,
	selectAppPeriods,
	(state: IPeriodState[]) => state.find(({buttonId}) => button === buttonId)
);

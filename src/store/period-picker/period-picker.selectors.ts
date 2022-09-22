import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {IPeriodState} from './period-picker.reducer';
import {selectAppPeriods, selectButtonId} from '../app.selectors';

export const getState = (state: IAppState) => state.periods;

export const selectPeriodByButtonId = createSelector(
	// getState,
	selectAppPeriods,
	selectButtonId,
	(state: IPeriodState[], b) => state.find(({buttonId}) => b === buttonId) as IPeriodState
);

import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {IDirectionState} from './directions.reducer';

export const getState = (state: IAppState) => state.directions;

export const selectDirections = createSelector(
	getState,
	(state: IDirectionState) => state.directionsList,
);

export const selectCurrentDirection = createSelector(
	getState,
	(state: IDirectionState) => state.currentDirection,
);

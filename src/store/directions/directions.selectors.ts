import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {IDirectionState} from './directions.reducer';
import {selectAppDirections} from '../app.selectors';

export const getState = (state: IAppState) => state.directions;

export const selectDirections = createSelector(
	selectAppDirections,
	(state: IDirectionState) => state.directionsList,
);

export const selectCurrentDirection = createSelector(
	selectAppDirections,
	(state: IDirectionState) => state.currentDirection,
);

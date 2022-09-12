import {createAction, props} from '@ngrx/store';
import {TDirection} from '../../app/models/direction.model';

export const setDirectionsList = createAction(
	'[Directions] Set Directions List',
	props<{list: TDirection[]}>()
);

export const filterDirectionsList = createAction(
	'[Directions] Filter Directions List By Button Id',
	props<{buttonId: number}>()
);

export const setCurrentDirection = createAction(
	'[Directions] Set Current Direction',
	props<{directionId: number | null}>()
);

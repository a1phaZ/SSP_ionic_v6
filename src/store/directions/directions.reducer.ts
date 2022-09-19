import {createReducer, on} from '@ngrx/store';
import * as DirectionsActions from './directions.actions';
import {TDirection} from '../../app/models/direction.model';

export interface IDirectionState {
	commonList: TDirection[];
	directionsList: TDirection[];
	currentDirection: number;
}

export const initialState: IDirectionState = {
	commonList: [],
	directionsList: [],
	currentDirection: 0
};

export const directionsReducer = createReducer(
	initialState,
	on(DirectionsActions.setDirectionsList, (state, {type, list}) => {
		console.log(type);
		return {commonList: [...list], currentDirection: 0, directionsList: []};
	}),
	on(DirectionsActions.filterDirectionsList, (state, {type, buttonId}) => {
		console.log(type);
		const {commonList, directionsList} = state;
		if (directionsList.some((item) => item.buttonId === buttonId)) {return state;}
		const list = commonList.filter((direction) => direction.buttonId === buttonId);
		return {
			...state,
			directionsList: list,
			currentDirection: list.length > 0 ? list[0].id: 0,
		};
	}),
	on(DirectionsActions.setCurrentDirection, (state, {type, directionId}) => {
		console.log(type);
		return {...state, currentDirection: directionId};
	})
);

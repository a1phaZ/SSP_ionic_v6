import {createAction, props} from '@ngrx/store';
import {TPossessionsRequest} from '../../app/models/possessions.model';

export enum EPossessionsActions {
	getList = '[Possessions] Get List',
	getListSuccess = '[Possessions] Get List Success',
	getListError = '[Possessions] Get List Error',
	getDetails = '[Possessions] Get Details',
	getDetailsSuccess = '[Possessions] Get Details Success',
	getDetailsError = '[Possessions] Get Details Error'
}

export const getPossessionsList = createAction(
	EPossessionsActions.getList,
	props<TPossessionsRequest>()
);

export const getPossessionsListSuccess = createAction(
	EPossessionsActions.getListSuccess,
	props<{list: any[]}>()
);

export const getPossessionDetails = createAction(
	EPossessionsActions.getDetails,
	props<TPossessionsRequest>()
);

export const getPossessionDetailsSuccess = createAction(
	EPossessionsActions.getDetailsSuccess,
	props<{details: any}>()
);

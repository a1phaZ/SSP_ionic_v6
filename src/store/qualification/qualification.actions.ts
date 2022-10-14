import {createAction, props} from '@ngrx/store';
import {EQualificationDetailMethods, TQualificationPostListRequest} from '../../app/models/qualification.model';

export enum EQualificationActions {
	getList = '[Qualification] Get List',
	getListSuccess = '[Qualification] Get List Success',
	getListError = '[Qualification] Get List Error',
	resetList = '[Qualification] Reset List',
	getPostList = '[Qualification] Get Post List',
	getPostListSuccess = '[Qualification] Get Post List Success',
	getPostListError = '[Qualification] Get Post List Error',
	setPerson = '[Qualification] Set Person',
	setPeriod = '[Qualification] Set Period',
}

export const getQualificationList = createAction(
	EQualificationActions.getList,
);

export const getQualificationListSuccess = createAction(
	EQualificationActions.getListSuccess,
	props<{list: any[]}>()
);

export const resetQualificationList = createAction(
	EQualificationActions.resetList,
);

export const getQualificationPostList = createAction(
	EQualificationActions.getPostList,
	props<{data: TQualificationPostListRequest}>()
);

export const getQualificationPostListSuccess = createAction(
	EQualificationActions.getPostListSuccess,
	props<{list: any[]}>()
);

export const setQualificationPerson = createAction(
	EQualificationActions.setPerson,
	props<{person: any}>()
);

export const setQualificationPeriod = createAction(
	EQualificationActions.setPeriod,
	props<{method: EQualificationDetailMethods; periodValue?: number; periodYear?: number}>()
);

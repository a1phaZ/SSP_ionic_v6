import {createReducer, on} from '@ngrx/store';
import * as QualificationActions from './qualification.actions';
import {EQualificationDetailMethods, TQualificationPeriod} from '../../app/models/qualification.model';

export interface IQualificationState {
	list: any[];
	personsList: any[];
	person: any;
	detail: {
		[EQualificationDetailMethods.loadQualificationUserFullInfo]: TQualificationPeriod;
		[EQualificationDetailMethods.getMotivation]: TQualificationPeriod;
	};
}

export const initialState: IQualificationState = {
	list: [],
	personsList: [],
	person: null,
	detail: {
		[EQualificationDetailMethods.loadQualificationUserFullInfo]: {
			periodValue: new Date().getMonth() < 5 ? 2 : 1,
			periodId: 5,
			periodYear: new Date().getFullYear()
		},
		[EQualificationDetailMethods.getMotivation]: {
			periodValue: new Date().getMonth() + 1,
			periodYear: new Date().getFullYear(),
		},
	}
};

export const qualificationReducer = createReducer(
	initialState,
	on(QualificationActions.getQualificationListSuccess, (state, {type, list}) => {
		console.log(type);
		return {
			...initialState,
			list,
		};
	}),
	on(QualificationActions.resetQualificationList, (state, {type}) => {
		console.log(type);
		return {
			...initialState
		};
	}),
	on(QualificationActions.getQualificationPostListSuccess, (state, {type, list}) => {
		console.log(type);
		return {
			...state,
			personsList: list,
		};
	}),
	on(QualificationActions.setQualificationPerson, (state, {type, person}) => {
		console.log(type);
		return {
			...state,
			person
		};
	}),
	on(QualificationActions.setQualificationPeriod, (state, {type, periodYear, periodValue, method}) => {
		console.log(type);
		return {
			...state,
			detail: {
				...state.detail,
				[method]: {
					periodValue: periodValue ? periodValue : state.detail[method].periodValue,
					periodYear: periodYear ? periodYear : state.detail[method].periodYear
				}
			}
		};
	}),
);

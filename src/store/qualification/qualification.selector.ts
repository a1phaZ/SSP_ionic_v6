import {createSelector, createSelectorFactory, defaultMemoize} from '@ngrx/store';
import {selectAppQualification} from '../app.selectors';
import {TSimpleItem} from '../../app/models/simple-item.model';
import {EQualificationDetailMethods, TQualificationPostListRequest} from '../../app/models/qualification.model';

export const sf = createSelectorFactory(
	(projFn) => defaultMemoize(
		projFn,
		(a, b) => a?.list?.length === b?.list?.length,
		(a) => a?.length !== 0
	)
);

export const testSelector = sf(
	selectAppQualification,
	(state) => state.list.map((item) => ({
		id: item.id,
		name: item.name,
		value: item.num,
	} as TSimpleItem))
);

export const selectQualificationList = createSelector(
	selectAppQualification,
	(state) => state.list.map((item) => ({
		id: item.id,
		name: item.name,
		value: item.num,
	} as TSimpleItem))
);

export const selectQualificationPostList = createSelector(
	selectAppQualification,
	(state) => state.personsList.map(serializePerson())
);

const serializePerson = () => (item) => ({
	idPost: item.id_post,
	id: item.id_user,
	userName: item.user_name,
	values: item.dc_arr,
	value: item.category || 'n/a',
	units: item.category ? item.category_name : null,
});

export const selectQualificationRatingPostList = createSelector(
	selectAppQualification,
	(state) => state.personsList.map((item) => ({
		id: item.id_user,
		name: item.user_name,
		value: item.ball_org || 'n/a',
		rating: item.rating,
		trend: item.trend,
	}))
);

export const selectQualificationRatingPostAsList = (id: number) => createSelector(
	selectAppQualification,
	(state) => state
		.personsList
		.filter(({id_user}) => id_user === id)
		.map(serializePerson())
);

export const selectQualificationRatingDescription = createSelector(
	selectAppQualification,
	(state) => {
		const item = state.personsList[0];
		if (item) {
			return `На основании присвоенного уровня квалификации на
			 ${item.period_value_qualification} полугодие ${item.year_qualification}`;
		}
		return null;
	}
);

export const selectQualificationPost = (postId: number) => sf(
	selectAppQualification,
	(state) => {
		const item = state.list.find(({id}) => id === postId);
		if (!item) {
			return {};
		}
		return {
			loadQualificationUserList: true,
			user: 1362,
			post: item.id,
			max_id_period: item.max_id_period,
			max_period_value: item.max_period_value,
			max_year: item.max_year,
			max_id_period_pred: item.max_id_period_pred,
			max_period_value_pred: item.max_period_value_pred,
			max_year_pred: item.max_year_pred,
			finish_date: item.finish_date,
		} as TQualificationPostListRequest;
	}
);

export const selectPeriodByMethod = (method: string) => createSelector(
	selectAppQualification,
	(state) => state.detail[method]
);

export const selectQualificationPersonDetailRequest = (method: string) => createSelector(
	selectAppQualification,
	selectQualificationPerson,
	(state, user) => {
		const _method = method === EQualificationDetailMethods.getMemo
			? EQualificationDetailMethods.getMotivation
			: method;
		const period = state.detail[_method];
		console.log({method, _method, period});
		switch (method) {
			case EQualificationDetailMethods.loadQualificationUserFullInfo:
				return fullInfo(period, user, _method);
			case EQualificationDetailMethods.getCareer:
				return career(user.id_user, _method);
			case EQualificationDetailMethods.getMotivation:
				return motivation(period, user, _method);
			case EQualificationDetailMethods.getMemo:
				return memo(period, user, method);
			default: return null;
		}
	}
);

export const selectQualificationPerson = createSelector(
	selectAppQualification,
	(state) => state.personsList.find(({id_user}) => id_user === state.person)
);

const fullInfo = (period, user, method) => ({
	[method]: true,
	user: 1362,
	user_qual: user.id_user,
	post: user.id_post,
	id_period: period.periodId,
	period_value: period.periodValue,
	year: period.periodYear,
});

const career = (userId, method) => ({
	[method]: true,
	user: 1362,
	directorId: userId
});

const motivation = (period, user, method) => ({
	[method]: true,
	user: 1362,
	user_qual: user.id_user,
	post: user.id_post,
	period_value: period.periodValue, // TODO понять как прикрутить
	year: period.periodYear,
	org: 0,
});

const memo = (period, user, method) => ({
	[method]: true,
	user: 1362,
	post: user.id_post,
	period_value: period.periodValue,
	year: period.periodYear,
});

import {TOrgSelectItem} from '../../app/models/organization.model';
import * as OrgsActions from './organizations.actions';
import {createReducer, on} from '@ngrx/store';

export interface IOrganizationsState {
	commonList: TOrgSelectItem[];
	list: { [key: number]: TOrgSelectItem[] };
	openedOrgs: { [key: number]: number[] };
	currentOrg: { [key: number]: TOrgSelectItem };
}

export const initialState: IOrganizationsState = {
	commonList: [],
	list: {},
	openedOrgs: {},
	currentOrg: null
};

export const organizationsReducer = createReducer(
	initialState,
	on(OrgsActions.setOrganizationList, (state, {list}) => ({
		...state,
		commonList: list
	})),
	on(OrgsActions.initializeOrgs, (state, {buttonId}) =>
		({
			...state,
			list: {
				...state.list,
				[buttonId]: state.commonList,
			}
		})
	),
	on(OrgsActions.chooseOrg, (state, {buttonId, org}) => {
		const {list} = state;
		const orgs = [...restoreOrgs([...list[buttonId]])] as TOrgSelectItem[];
		const idx = org ? orgs.findIndex(({parentId, id}) => id === org.id && parentId === org.parentId) : 0;

		const _org = {...orgs[idx]};

		return {
			...state,
			list: {
				...state.list,
				[buttonId]: selectOrg(_org, orgs)
			},
			currentOrg: {
				...state.currentOrg,
				[buttonId]: orgs[idx]
			}
		};
	}),
);

const selectOrg = (org: TOrgSelectItem, list: TOrgSelectItem[]): TOrgSelectItem[] => {
	let _list = [...list];
	const idx = _list.findIndex((item) => item.id === org.id && item.parentId === org.parentId);
	_list[idx] = {..._list[idx], isActive: true};
	if (!org.parentId) {
		return _list;
	} else {
		// console.log(_list, _list[idx]);
		const parentIdx = _list.findIndex((item) => item.id === _list[idx].parentId && item.orgType === _list[idx].parentOrgType);
		if (parentIdx !== -1) {
			_list[parentIdx] = {..._list[parentIdx], isOpen: true};
			_list = selectOrg(_list[parentIdx], _list);
		}

	}
	return _list;
};

const restoreOrgs = (list: TOrgSelectItem[]): TOrgSelectItem[] => list.map((item) => ({
	...item,
	isActive: false,
	isOpen: false,
}));

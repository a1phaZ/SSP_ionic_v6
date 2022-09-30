import {selectAppPossessions} from '../app.selectors';
import {createSelector} from '@ngrx/store';
import {serializePossessions} from '../../app/shared/utils/possessions.utils';
import {TAccordionItemCommon} from '../../app/models/accordion.model';

const possessionsCityReduce = (mode: string) => (acc, cur) => {
	if (acc.length === 0) {
		return [{
			id: cur[mode],
			name: cur[mode],
			data: [
				serializePossessions(cur),
			]
		}];
	}
	const idx = acc.findIndex(({id}) => id === cur[mode]);
	// console.log(idx, acc, cur.object_city, acc[acc.length - 1] );

	if (idx >= 0) {
		const _acc = [...acc];
		_acc[idx].data.push(serializePossessions(cur));
		return [..._acc];
	}

	return [
		...acc,
		{
			id: cur[mode],
			name: cur[mode],
			data: [
				serializePossessions(cur),
			]
		}
	];
};

const possessionsBrandsRecurse = (list: TAccordionItemCommon[]) => {
	const _list = [...list];
	const o = [];
	_list.forEach((item) => {
		// item.brands.forEach(i => console.log(i));
		item.brands.forEach((brand) => {
			const idx = o.findIndex((obj) => obj.id === brand.brand_name);
			if (idx >= 0) {
				o[idx] = {
					...o[idx],
					data: [...o[idx]?.data, serializePossessions(item),]
				};
			} else {
				o.push({
					id: brand.brand_name,
					name: brand.brand_name,
					data: [serializePossessions(item)]
				});
			}
		});
	});
	console.log(o);

	return o;
};

export const selectPossessionsList = (mode: string) => createSelector(
	selectAppPossessions,
	(state) => {
		const _state = {...state};
		switch (mode) {
			case 'brands':
			{
				return possessionsBrandsRecurse(_state.list);
			}
			default:
				return _state.list.reduce(possessionsCityReduce(mode), []);
		}
	}
);

export const selectPossessionsDetails = createSelector(
	selectAppPossessions,
	(state) => state.details
);


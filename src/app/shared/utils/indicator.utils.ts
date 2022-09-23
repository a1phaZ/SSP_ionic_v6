import {TIndicator} from '../../models/indicator.model';

export const serializeIndicator = (item: any): TIndicator => ({
	id: item.id_tpl,
	isOpen: false,
	childs: item.childs.map(serializeIndicator),
	mode: 'standard', //?
	test: item.test,
	title: item.title,
	plan: {
		sum: item.number_pln,
		viewSum: item.pln_mobile,
		complete: item.val_ptl_pct,
		completeStatus: item.state,
	},
	fact: {
		viewSum: item.fakt_mobile,
		sum: item.number_fakt
	},
	units: item.unit,
	runRate: item.runrate,
});

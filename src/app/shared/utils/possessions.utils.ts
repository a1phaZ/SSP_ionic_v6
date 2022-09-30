import {TAccordionItem, TAccordionItemCommon} from '../../models/accordion.model';

export const serializePossessions = (item: TAccordionItemCommon): TAccordionItem => ({
	id: item.id,
	status: item.status_name,
	square: item.square,
	year: item.year,
	city: item.city,
	thumb: item.photo,
	name: item.name,
	objectName: item.name,
	objectType: item.type_name,
	logo: item.orgs.map((o) => o.logo_file),
	pct: item.pct
});

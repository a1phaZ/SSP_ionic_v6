export type TAccordionItem = {
	id: number;
	name: string;
	city: string;
	objectName: string;
	objectType: string;
	year: number;
	square: string;
	thumb: string;
	status: string;
	logo: string[];
};

export type TAccordionItemCommon = {
	id: number;
	name: string;
	address: string;
	square: string;
	year: number;
	object_type: number;
	object_status: number;
	marker_delete: number;
	object_city: number;
	object_city_name: string;
	status_name: string;
	type_name: string;
	photo: string;
	city: string;
	div: string;
	orgs: TAccordionItemOrg[];
	brands: TAccordionItemBrand[];
	pct: number;
};

export type TAccordionItemOrg = {
	id: number;
	logo_file: string;
	city_id: number;
	city: string;
	div_id: number;
	div: string;
};

export type TAccordionItemBrand = {
	brand_id: number;
	brand_name: string;
};

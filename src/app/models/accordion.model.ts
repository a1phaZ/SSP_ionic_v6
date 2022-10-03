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
	pct: number;
};

export type TAccordionDataItem = {
	id: number;
	name: string;
	data: TAccordionItem[];
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

export type TAccordionItemFolder = {
	name: string;
	type: 'folder';
	data: Array<TAccordionItemTypeData>;
};

export type TAccordionItemTypeData = {
	name: string;
	type: 'data';
	data: Array<TAccordionItemFieldTypeText | TAccordionItemFieldTypeLink>;
};

export type TAccordionItemFieldTypeText = {
	field_name: string;
	field_type: 'text';
	field_value: string | false;
};

export type TAccordionItemFieldTypeLink = {
	field_name: string;
	field_type: 'link';
	field_time: string;
	field_date: string;
	field_user_name: string;
	field_value: {
		name: string;
		path: string;
	};
};

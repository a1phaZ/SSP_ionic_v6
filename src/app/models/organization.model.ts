export type TOrgSelectItem = {
	id: number;
	logo: string | null;
	title: string;
	orgType: number;
	childs?: TOrgSelectItem[];
	isOpen?: boolean;
	isActive?: boolean;
	parentId: number;
	parentOrgType: number;
	id_parents?: number;
	summary?: boolean;
};

export enum EAvailableOrgs {
	'autoholding' = 1,
	'dc' = 3,
	'division' = 2,
	'brand' = 5,
	'marketplace' = 9,
	'trade_division' = 998,
	'trade_marketplace' = 999,
	'trade_entity' = 3,
	'mark' = 100,
	'group' = 10,
}

export const CAvailableOrgsTranslate = {
	1: 'Автохолдинг',
	2: 'Дивизион',
	3: 'ДЦ',
	5: 'Бренд ОПА',
	9: 'Площадка',
	10: 'ДЦ',
	100: 'Марка',
	998: 'Дивизион',
	999: 'Площадка',
};

import {TBlockColumn, TBlockWithHeaderValues} from './blocks.model';

export type TIndicator = {
	id: number;
	title: string;
	plan: {
		sum: number;
		viewSum: string;
		complete: number;
		completeStatus: 'success' | 'enough' | 'danger' | 'excellent';
	};
	fact: {
		sum: number;
		viewSum: string;
	};
	units: string;
	mode: 'standard';
	test?: boolean;
	childs: TIndicator[];
	isOpen: boolean;
	runRate?: number;
};

export type TIndicatorStore = {
	direction: number;
	data: TIndicator[];
};

export type TIndicatorDetails = {
	blocks: TIndicatorDetailsBlock[];
	comments: string;
	formula: string;
	formula2: string;
	indInfo: TIndicatorDetailsIndInfo;
};

export type TIndicatorDetailsBlock = {
	periodId: number;
	periodName: string;
	values: TIndicatorDetailsBlockValue[];
};

export type TIndicatorDetailsBlockValue = |
	TIndicatorDetailsBlockValueTypeText |
	TIndicatorDetailsBlockValueTypeBar |
	TBlockColumn |
	TBlockWithHeaderValues;

export type TIndicatorDetailsBlockValueTypeText = {
	type: 'text';
	name: string;
	title: string;
	value: string | number;
	suffix: string;
	blur?: boolean;
};

export type TIndicatorDetailsBlockValueTypeBar = {
	type: 'bar';
	value: string | number;
	min: number;
	max: number;
	state: 'excellent' | 'success' | 'enough' | 'danger';
	suffix: string;
};

export type TIndicatorDetailsIndInfo = {
	id: number;
	id_period: number;
	depends_count: number;
	title: string;
	is_marka_analytics: boolean | null;
};

export type TIndicatorDetailsRequest = {
	id: number;
	periodName: number;
	periodValue: number;
	periodYear: number;
	typeOrg: number;
	brand: number;
	idOrg: number;
	podr: number;
	objectId: number;
	objectType: number;
	user: number;
};

export type TIndicator = {
	id: number;
	title: string;
	plan: {
		sum: number;
		viewSum: string;
		complete: number;
		completeStatus: 'success' | 'enough' | 'danger' | 'excellent';
	//	TODO complete status const
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
};

export type TIndicatorReserve = {
	id: number;
	parentId: number;
	title: string;
	values: number[];
	labels: string[];
	childs: TIndicatorReserve[];
	isOpen?: boolean;
};

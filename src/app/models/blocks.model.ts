export type TBlockWithHeader = {
	values: TBlockWithHeaderValues[];
	periodId: number;
	periodName: string;
};

export type TBlockWithHeaderValues = {
	name: string;
	value: string;
	lvl: string;
};

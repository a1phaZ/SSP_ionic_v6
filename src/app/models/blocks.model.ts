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

export type TBlockColumn = {
	name: string;
	info: TBlockColumnInfo[];
};

export type TBlockColumnInfo = {
	name: string;
	value: string;
	comment: string;
};

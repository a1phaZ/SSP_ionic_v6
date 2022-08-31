export type TDirection = {
	id: number;
	title: string;
	buttonId: number;
	period: TDirectionPeriod;
};

export type TDirectionPeriod = {
	periodYear: number;
	periodValue: number;
};

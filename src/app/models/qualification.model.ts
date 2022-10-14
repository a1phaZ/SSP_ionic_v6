export type TQualificationPostListRequest = {
	loadQualificationUserList: true;
	user: number;
	post: number;
	max_id_period: number;
	max_period_value: number;
	max_year: number;
	max_id_period_pred: number;
	max_period_value_pred: number;
	max_year_pred: number;
	finish_date: string;
};

export enum EQualificationDetailMethods {
	loadQualificationUserFullInfo = 'loadQualificationUserFullInfo',
	getCareer = 'getCareer',
	getMotivation = 'getMotivation',
	getMemo = 'getMemo',
}

export type TQualificationPeriod = {
	periodValue: number;
	periodYear: number;
	periodId?: number;
};

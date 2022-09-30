export type TPossessionsRequest = {
	getObjectsList?: boolean;
	getObjectDetails?: boolean;
	user: number;
	id?: number;
};

export enum EPossessionsTabs {
	info = 'Основная информация',
	invest = 'Инвестиции',
	docs = 'Документы',
	report = 'Обращения'
}

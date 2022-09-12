export type TDashboardItem = {
	background: string;
	icon: string;
	id: number;
	parentId?: number;
	isChild: boolean;
	isDevelopment: boolean;
	keyWord: string;
	name: string;
	title: string;
	path?: string;
};
export type TOrgSelectItem = {
	id: number;
	logo: string | null;
	title: string;
	orgType: number;
	childs?: TOrgSelectItem[];
	isOpen?: boolean;
	isActive?: boolean;
};

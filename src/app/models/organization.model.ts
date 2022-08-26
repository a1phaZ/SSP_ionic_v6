export type TOrgSelectItem = {
	id: number;
	logo: string | null;
	title: string;
	childs?: TOrgSelectItem[];
	isOpen?: boolean;
	isActive?: boolean;
};

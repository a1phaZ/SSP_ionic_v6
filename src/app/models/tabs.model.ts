import {THeaderButtons} from './button.model';

export type TTab = {
	title: string;
	path: string;
	dev?: boolean;
	buttons?: THeaderButtons;
	icon?: string;
};

export type TTabs = TTab[];

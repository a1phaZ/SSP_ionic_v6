import {Icons} from './icons.model';

export type TButton = {
	id: number;
	name: Icons;
	text: string;
	isSelected: boolean;
};

export type THeaderButton = {
	name: string;
	cssClass?: string;
};

export type THeaderButtons = {
	right?: THeaderButton[];
	left?: THeaderButton[];
};

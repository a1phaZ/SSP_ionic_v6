import {TProgress} from './progress.model';

export type TRating = {
	orgId: number;
	orgName: string;
	fakt: TRatingValue;
	plan: TRatingValue;
	pct: number;
	state: TProgress;
	runrate: number;
	id_parent_group: number | null;
	childs?: TRating[];
	total?: boolean;
	isOpen?: boolean;
};

export type TRatingValue = {
	value: number;
	formatted: string;
};

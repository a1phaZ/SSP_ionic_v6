export type TRating = {
	orgId: number;
	orgName: string;
	fakt: TRatingValue;
	plan: TRatingValue;
	pct: number;
	state: 'bad' | 'norm' | 'crit' | 'good';
	runrate: number;
	id_parent_group: number | null;
	childs?: TRating[];
};

export type TRatingValue = {
	value: number;
	formatted: string;
};
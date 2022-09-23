//{
// 	"title": "Ауди Витебский",
// 	"orgId": 246,
// 	"id": 300919,
// 	"id_tpl": 2854,
// 	"brandCount": 1,
// 	"brandId": 7,
// 	"brandName": "Ауди",
// 	"pct": 31,
// 	"plan": 11,
// 	"unit": "место",
// 	"fact": 40,
// 	"fact_all": 53,
// 	"state": "bad"
// }
export type TDistributorRating = {
	id: number;
	title: string;
	orgId: number;
	id_tpl: number;
	brandCount: number;
	brandId: number;
	brandName: string;
	pct: number;
	plan: number;
	unit: string;
	fact: number;
	fact_all: number;
	state: string; // TODO Добавить перечисляемый тип
	isOpen?: boolean;
};

export type TDistributorRatingRequest = {
	user: number;
	getRating: boolean;
	mode: 'dc' | 'division' | 'brand';
};

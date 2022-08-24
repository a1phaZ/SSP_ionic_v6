import {Component, Input} from '@angular/core';
import {CrisisService} from '../../services/crisis.service';
import {TRating} from '../../models/rating.model';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {

	@Input()
	ratingList: TRating[];

	ratingSortField = 'pct';
	ratingSortOrder: 'desc' | 'asc' = 'desc';
	org: any = null;

	ratingColor = {
		good: 4,
		norm: 3,
		crit: 2,
		bad: 1,
	};

	constructor(
		public crisisService: CrisisService
	) {
	}


	changeSortDirection(sortDirection: string) {
		if (this.ratingSortField === sortDirection) {
			this.ratingSortOrder = this.ratingSortOrder === "desc" ? "asc" : "desc";
		}
		this.ratingSortField = sortDirection;
	}

	replaceNBSP(str: string): string {
		return str.replace(/&nbsp;/g, " ");
	}
}

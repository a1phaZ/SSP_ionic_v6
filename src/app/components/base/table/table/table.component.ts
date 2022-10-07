import {ApplicationRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TTableColumn, TTableRow} from '../../../../models/table.model';

@Component({
	selector: 'app-base-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

	@Input()
	columns: TTableColumn[];

	@Input()
	rows: Array<TTableRow>;

	@Input()
	headerClassName: string;

	@Output()
	rowClick: EventEmitter<any> = new EventEmitter<any>();

	ratingSortField = 'dc';
	ratingSortOrder: 'desc' | 'asc' = 'asc';

	constructor(
		private appRef: ApplicationRef,
	) {
	}

	ngOnInit() {
		this.ratingSortField = this.columns[0].name;
		this.rows = this.sortRows(this.rows, 0, this.ratingSortOrder);
	}

	changeSortDirection(index: number) {
		if (this.ratingSortField !== this.columns[index].name) {
			this.ratingSortField = this.columns[index].name;
			this.ratingSortOrder = 'asc';
		} else {
			this.ratingSortOrder = this.ratingSortOrder === 'desc' ? 'asc' : 'desc';
		}
		this.sortRows(this.rows, index, this.ratingSortOrder);
		this.appRef.tick();
	}

	sortRows(rows: TTableRow[], index: number, order: string): TTableRow[] {
		if (index === 0) {
			return this.sortRowsTitle(rows, order);
		}
		return this.sortRowsData(rows, index - 1, order);
	}

	sortRowsTitle(rows: TTableRow[], order: string): TTableRow[] {
		return rows.sort((a, b) => {
			if (a.name > b.name) { return order === 'asc' ? 1 : -1;}
			if (a.name < b.name) { return order === 'asc' ? -1 : 1;}
			return 0;
		});
	}

	sortRowsData(rows: TTableRow[], index: number, order: string): TTableRow[] {
		return rows.sort((a, b) => {
			if (a.data[index].value > b.data[index].value) {return order === 'asc' ? 1 : -1;}
			if (a.data[index].value < b.data[index].value) {return order === 'asc' ? -1 : 1;}
			return 0;
		});
	}

}

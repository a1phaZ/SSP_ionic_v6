import {Component, Input, OnInit} from '@angular/core';
import {TTableColumn, TTableRowAKU} from '../../../../models/table.model';

@Component({
	selector: 'app-base-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

	@Input()
	columns: TTableColumn[];

	@Input()
	rows: Array<TTableRowAKU>;

	ratingSortField = 'dc';
	ratingSortOrder: 'desc' | 'asc' = 'asc';

	constructor() {
	}

	ngOnInit() {
		this.ratingSortField = this.columns[0].name;
	}

	changeSortDirection(index: number) {

		if (this.ratingSortField !== this.columns[index].name) {
			this.ratingSortField = this.columns[index].name;
			this.ratingSortOrder = 'asc';
		} else {
			this.ratingSortOrder = this.ratingSortOrder === 'desc' ? 'asc' : 'desc';
		}
		this.sortRows(this.rows, index, this.ratingSortOrder);
	}

	sortRows(rows: TTableRowAKU[], index: number, order: string): TTableRowAKU[] {
		if (index === 0) {
			return this.sortRowsTitle(rows, order);
		}
		return this.sortRowsData(rows, index - 1, order);
	}

	sortRowsTitle(rows: TTableRowAKU[], order: string): TTableRowAKU[] {
		return rows.sort((a, b) => {
			if (a.name > b.name) { return order === 'asc' ? 1 : -1;}
			if (a.name < b.name) { return order === 'asc' ? -1 : 1;}
			return 0;
		});
	}

	sortRowsData(rows: TTableRowAKU[], index: number, order: string): TTableRowAKU[] {
		return rows.sort((a, b) => {
			if (a.data[index].value > b.data[index].value) {return order === 'asc' ? 1 : -1;}
			if (a.data[index].value < b.data[index].value) {return order === 'asc' ? -1 : 1;}
			return 0;
		});
	}

}

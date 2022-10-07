import {Component, Input, OnInit} from '@angular/core';
import {ETableRowsColorIndicator} from '../../pages/security/security-detail/security-detail.page';

@Component({
  selector: 'app-legend-table',
  templateUrl: './legend-table.component.html',
  styleUrls: ['./legend-table.component.scss'],
})
export class LegendTableComponent implements OnInit {

	@Input() tableData: any;
	isView = false;

	constructor() { }



	ngOnInit() {
		this.isView = true;
	}

	isEmpty(obj: any): boolean {
		if (!obj) {
			return true;
		}
		// eslint-disable-next-line guard-for-in
		for (const key in obj) {
			return false;
		}
		return true;
	}

	getColorIndicator(indicator: number): string {
		return ETableRowsColorIndicator[indicator];
	}

}

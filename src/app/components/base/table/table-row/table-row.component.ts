import {Component, Input, OnInit} from '@angular/core';
import {TTableRowAKU} from '../../../../models/table.model';

@Component({
  selector: 'app-base-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent implements OnInit {

	@Input()
	item: TTableRowAKU;

	@Input()
	index = 0;

  constructor() { }

  ngOnInit() {}

}

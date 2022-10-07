import {Component, Input, OnInit} from '@angular/core';
import {TTableRow} from '../../../../models/table.model';

@Component({
  selector: 'app-base-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent implements OnInit {

	@Input()
	item: TTableRow;

	@Input()
	index = 0;

  constructor() { }

  ngOnInit() {}

}

import {NgModule} from '@angular/core';
import {TableComponent} from './table/table.component';
import {CommonModule} from '@angular/common';
import {TableRowComponent} from './table-row/table-row.component';

@NgModule({
	imports: [CommonModule],
	declarations: [TableComponent, TableRowComponent],
	exports: [TableComponent, TableRowComponent]
})
export class TableModule {}

import {NgModule} from '@angular/core';
import {LegendTableComponent} from './legend-table.component';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [LegendTableComponent],
	imports: [
		CommonModule
	],
	exports: [LegendTableComponent]
})
export class LegendTableModule {}

import {NgModule} from '@angular/core';
import {DonutComponent} from './donut/donut.component';
import {CommonModule} from '@angular/common';
import {CircleChartComponent} from './circle/circle-chart.component';

@NgModule({
	declarations: [DonutComponent, CircleChartComponent],
	imports: [
		CommonModule
	],
	exports: [DonutComponent, CircleChartComponent]
})
export class ChartsModule {}

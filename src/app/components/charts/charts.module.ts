import {NgModule} from '@angular/core';
import {DonutComponent} from './donut/donut.component';
import {CommonModule} from '@angular/common';
import {CircleChartComponent} from './circle/circle-chart.component';
import {ChartComponent} from './chart/chart.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {ChartColumnPartComponent} from './chart-column-part/chart-column-part.component';

@NgModule({
	declarations: [ChartComponent, DonutComponent, CircleChartComponent, ChartColumnPartComponent],
	imports: [
		CommonModule,
		HighchartsChartModule
	],
	exports: [ChartComponent, DonutComponent, CircleChartComponent, ChartColumnPartComponent]
})
export class ChartsModule {}

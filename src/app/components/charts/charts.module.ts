import {NgModule} from '@angular/core';
import {DonutComponent} from './donut/donut.component';
import {CommonModule} from '@angular/common';
import {CircleChartComponent} from './circle/circle-chart.component';
import {ChartComponent} from './chart/chart.component';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
	declarations: [ChartComponent, DonutComponent, CircleChartComponent],
	imports: [
		CommonModule,
		HighchartsChartModule
	],
	exports: [ChartComponent, DonutComponent, CircleChartComponent]
})
export class ChartsModule {}

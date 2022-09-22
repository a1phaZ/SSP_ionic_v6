import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.scss'],
	// standalone: true,
	// imports: [HighchartsChartModule, CommonModule]
})
export class ChartComponent implements OnChanges {
	@Input()
	data: any;

	Highcharts = Highcharts;
	// linechart: any = {
	// 	series: [
	// 		{
	// 			data: [1, 2, 3],
	// 		},
	// 	],
	// 	chart: {
	// 		type: 'line',
	// 	},
	// 	title: {
	// 		text: 'linechart',
	// 	},
	// };
	color: '#fff';
	linechart: any;

	constructor() {
	}

	chartCallback: Highcharts.ChartCallbackFunction = (chart): void => {
		setTimeout(() => {
			chart.reflow();
		},0);
	};

	getChartSeries(series: IChartSeries[]) {
		return series.map((s, idx) => ({
			name: s.name,
			data: s.data,
			color: chartLineColors[idx],
		}));
	}

	ngOnChanges(changes: SimpleChanges): void {
		const data = changes.data.currentValue;
		this.linechart = {
			chart: {
				type: 'line',
				backgroundColor: 'rgba(0,0,0,0)',
			},
			title: {
				text: '',
			},
			credits: {
				enabled: false,
			},
			subtitle: {
				text: '',
			},
			xAxis: {
				labels: {
					style: {
						color: '#fff',
						fontWeight: 'light',
						fontSize: '10px',
					},
				},
				lineColor: '#CFD8DC',
				tickColor: '#FFFFFF',
				categories: data.categories,
			},
			yAxis: {
				gridLineColor: '#CFD8DC',
				title: {
					text: '',
				},
				tooltip: {},
				labels: {
					style: {
						color: '#fff',
						fontSize: '10px',
					},
				},
			},
			legend: {
				align: 'left',
				// alignColumns: true,
				verticalAlign: 'top',
				padding: 10,
				floating: false,
				itemDistance: 10,
				x: -10,
				y: -15,
				reversed: false,
				maxHeight: 100,
				// width: '110%',
				itemStyle: {
					color: '#fff',
					fontWeight: 'light',
					fontSize: '12px',
					lineHeight: '20px',
					paddingBottom: '8px',
				},
			},
			plotOptions: {
				line: {
					dataLabels: {
						enabled: false,
					},
					enableMouseTracking: true,
				},
				series: {
					marker: {
						radius: 5,
						symbol: 'circle',
					},
					lineWidth: 1,
				},
			},
			tooltip: {
				headerFormat:
					'<span style="font-size:11px"><b>{point.index}</b></span><br>',
				pointFormat:
					'<span style="color:{point.color}">calls</span>: <b>{point.y}</b> <br/>',
				formatter() {
					return `
						<span style="font-size:11px">${
						data.series[this.series.index].labels[this.point.index]
					}</span><br>
					`;
					// <span style="font-size:11px">${data.categories[this.point.index]} ${this.series.name}</span><br>
					// <span style="font-size:11px"><b>${data.series[this.series.index].formattedData[this.point.index]}</b></span><br>
				},
			},
			series: this.getChartSeries(data.series || []),
		};
	}

}

interface IChartSeries {
	name: string;
	data: number[];
	formattedData: string[];
}

const chartLineColors = ['#ff7bb9', '#6f8ef6', '#02c3ee', '#54e890'];


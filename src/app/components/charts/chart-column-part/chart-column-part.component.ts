import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartComponent} from '../chart/chart.component';

@Component({
	selector: 'app-chart-column-part',
	templateUrl: '../chart/chart.component.html',
	styleUrls: ['./chart-column-part.component.scss'],
})
export class ChartColumnPartComponent extends ChartComponent implements OnInit, OnChanges {

	constructor() {
		super();
	}

	ngOnInit() {
	}

	getChartSeries(series): { data: any[]; color: string; name: string }[] {
		const colors = ['#6f8ef6', '#54e890', '#02c3ee', '#ff7bb9'];
		return series.map((el, i) => ({
			name: el.title,
			color: el.color || colors[i] || 'grey',
			data: el.values.map((value, x) => ({
					y: Number(value),
					customData: el['description'] ? el['description'][x] || null : null,
				})),
		}));
	}

	ngOnChanges(changes: SimpleChanges) {
		const dataChart = changes.data.currentValue;

		function pointFormatter() {
			let result = `
        <p>
            <span style="color: ${this.series.color};">●</span>
            ${this.series.name}: <strong>${this.y}</strong>
        </p>
        <br/>
      `;

			if (this.customData) {
				this.customData.forEach((data) => {
					result += `<p>${data.title}: <strong>${data.value}</strong></p><br/>`;
				});
			}
			return result;
		}

		if (dataChart) {
			this.linechart = {
				chart: {
					type: 'column',
					backgroundColor: 'rgba(0,0,0,0)',
					events: {
						load() {
							this.clickedOnce = false;
						},
						click(e) {
							const chart = this;
							const yAxis = chart.yAxis[0];
							const xAxis = chart.xAxis[0];

							let x; let y; let rangeX; let rangeY;

							if (!chart.clickedOnce) {
								x = xAxis.toValue(e.chartX);
								y = yAxis.toValue(e.chartY);
								rangeX = xAxis.max - xAxis.min;
								rangeY = yAxis.max - yAxis.min;

								xAxis.setExtremes(x - rangeX / 10, x + rangeX / 10, false);
								yAxis.setExtremes(y - rangeY / 10, y + rangeY / 10, false);
								chart.redraw();

								chart.clickedOnce = true;
							} else {
								chart.zoomOut();
								chart.clickedOnce = false;
							}
						},
					},
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
					categories: dataChart.ordinat,
					min: 0,
					max: dataChart.ordinat.length - 1,
					ordinal: false,
				},
				yAxis: {
					reversed: dataChart.reversedY,
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
					enabled: true,
					align: 'center',
					verticalAlign: 'top',
					floating: false,
					itemDistance: 10,
					x: -10,
					y: -15,
					itemStyle: {
						color: '#fff',
						fontWeight: 'light',
						fontSize: '12px',
					},
				},
				plotOptions: {
					line: {
						dataLabels: {
							enabled: false,
						},
						enableMouseTracking: true,
					},
					column: {
						stacking: 'normal',
						dataLabels: {
							enabled: true,
						},
					},
					series: {
						marker: {
							radius: 5,
							symbol: 'circle',
						},
						lineWidth: 1,
					},
				},
				series: this.getChartSeries(dataChart.data),
				tooltip: {
					pointFormatter,
				},
			};
		}

	}

}

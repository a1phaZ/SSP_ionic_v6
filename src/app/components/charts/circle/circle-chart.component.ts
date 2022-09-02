import {Component, Input, OnInit} from '@angular/core';
import {TIndicatorProgress} from '../../../models/indicator-progress.model';
import {getColor} from '../../../shared/utils/charts.utils';

@Component({
  selector: 'app-circle',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss'],
})
export class CircleChartComponent implements OnInit {

	@Input()
	item: TIndicatorProgress;

  constructor() { }

  ngOnInit() {}

	getColor(item: TIndicatorProgress): string {
	  return getColor(item.progressStatus);
	}

}

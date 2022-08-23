import {Component, Input, OnInit} from '@angular/core';
import {TIndicatorDetails} from '../../../models/indicator.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

	@Input()
	indicator: TIndicatorDetails;

  constructor() { }

  ngOnInit() {}

}



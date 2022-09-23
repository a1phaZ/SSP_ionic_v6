import { Component, OnInit } from '@angular/core';
import {ListComponent} from '../list/list.component';

@Component({
  selector: 'app-distributor-rating-list',
  templateUrl: './distributor-rating-list.component.html',
  styleUrls: ['../list/list.component.scss', './distributor-rating-list.component.scss'],
})
export class DistributorRatingListComponent extends ListComponent implements OnInit {

  constructor() {
	  super();
  }

  ngOnInit() {}

}

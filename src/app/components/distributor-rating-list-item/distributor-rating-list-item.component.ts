import { Component, OnInit } from '@angular/core';
import {ItemComponent} from '../list/item/item.component';

@Component({
  selector: 'app-distributor-rating-list-item',
  templateUrl: './distributor-rating-list-item.component.html',
  styleUrls: ['./distributor-rating-list-item.component.scss'],
})
export class DistributorRatingListItemComponent extends ItemComponent implements OnInit {

  constructor() {
	  super();
  }

  ngOnInit() {}

}

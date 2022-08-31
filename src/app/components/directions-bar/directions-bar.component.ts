import {Component, Input, OnInit} from '@angular/core';
import {TDirection} from '../../models/direction.model';
import {ItemsBarComponent} from '../base/items-bar/items-bar.component';

@Component({
  selector: 'app-directions-bar',
  templateUrl: './directions-bar.component.html',
  styleUrls: ['./directions-bar.component.scss'],
})
export class DirectionsBarComponent extends ItemsBarComponent implements OnInit {

	@Input()
	items: TDirection[];

  constructor() {
	  super();
  }

  ngOnInit() {}


}

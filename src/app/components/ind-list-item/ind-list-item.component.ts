import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TIndicator} from '../../models/indicator.model';

@Component({
  selector: 'app-ind-list-item',
  templateUrl: './ind-list-item.component.html',
  styleUrls: ['./ind-list-item.component.scss'],
})
export class IndListItemComponent{

	@Input()
	indicator: TIndicator;

	@Output()
	itemToggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

	onItemToggle(id) {
	  this.itemToggle.emit(id);
	}
}

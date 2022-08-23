import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
})
/**
 * Button to dashboard
 */
export class DashboardItemComponent {

	@Input() item;
	@Output() selectItem: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }


	onSelectItem(id) {
		this.selectItem.emit(id);
	}
}

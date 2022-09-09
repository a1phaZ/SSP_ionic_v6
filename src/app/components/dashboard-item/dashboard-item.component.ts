import {Component, EventEmitter, Input, Output} from '@angular/core';

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


	constructor() {

	}

	onSelectItem(item) {
		this.selectItem.emit(item);
	}
}

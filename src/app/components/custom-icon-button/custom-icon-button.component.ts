import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-custom-icon-button',
	templateUrl: './custom-icon-button.component.html',
	styleUrls: ['./custom-icon-button.component.scss'],
})
export class CustomIconButtonComponent {

	@Input()
	id: number;
	@Input()
	name: string;
	@Input()
	height = 62;
	@Input()
	size: string;

	@Output()
	clickBtn: EventEmitter<any> = new EventEmitter<any>();

	constructor() {
	}

	onClickBtn(id) {
		this.clickBtn.emit(id);
	}

}

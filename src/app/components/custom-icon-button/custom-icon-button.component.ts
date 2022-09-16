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
	size: string | null = null;
	@Input()
	disabled = false;
	@Input()
	buttonClass = '';

	@Output()
	clickBtn: EventEmitter<any> = new EventEmitter<any>();

	constructor() {
	}

	onClickBtn(event) {
		if (!this.disabled) {this.clickBtn.emit(event);}
	}

}

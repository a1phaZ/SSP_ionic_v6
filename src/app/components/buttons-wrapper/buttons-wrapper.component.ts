import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TButton} from '../../models/button.model';

@Component({
	selector: 'app-buttons-wrapper',
	templateUrl: './buttons-wrapper.component.html',
	styleUrls: ['./buttons-wrapper.component.scss'],
})
export class ButtonsWrapperComponent {

	@Input()
	buttons: TButton[];

	@Output()
	clickBtn: EventEmitter<any> = new EventEmitter<any>();

	constructor() {

	}

	onClick(id) {
		this.clickBtn.emit(id);
	}

}

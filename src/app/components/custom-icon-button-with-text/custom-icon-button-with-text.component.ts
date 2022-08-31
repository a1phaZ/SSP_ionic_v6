import {Component, Input} from '@angular/core';
import {CustomIconButtonComponent} from '../custom-icon-button/custom-icon-button.component';

@Component({
	selector: 'app-custom-icon-button-with-text',
	templateUrl: './custom-icon-button-with-text.component.html',
	styleUrls: ['./custom-icon-button-with-text.component.scss'],
})
export class CustomIconButtonWithTextComponent extends CustomIconButtonComponent {

	@Input()
	text: string;
	@Input()
	isSelected: boolean;

	constructor() {
		super();
	}

}

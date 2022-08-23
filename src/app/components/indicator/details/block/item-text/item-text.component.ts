import {Component, Input} from '@angular/core';
import {TIndicatorDetailsBlockValue} from '../../../../../models/indicator.model';

@Component({
	selector: 'app-item-text',
	templateUrl: './item-text.component.html',
	styleUrls: ['./item-text.component.scss'],
})
export class ItemTextComponent {

	@Input()
	item: TIndicatorDetailsBlockValue;

	constructor() {
	}

}

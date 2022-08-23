import {Component, Input} from '@angular/core';
import {TIndicatorDetailsBlockValue} from '../../../../../models/indicator.model';

@Component({
	selector: 'app-item-bar',
	templateUrl: './item-bar.component.html',
	styleUrls: ['./item-bar.component.scss'],
})
export class ItemBarComponent {

	@Input()
	item: TIndicatorDetailsBlockValue;

	constructor() {
	}

	calcWidth(value) {
		let _value = value > 100 ? 100 : value;
		_value = _value < 0 ? 0 : _value;
		return _value;
	}

}

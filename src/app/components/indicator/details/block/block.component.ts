import {Component, Input} from '@angular/core';
import {TIndicatorDetailsBlock} from '../../../../models/indicator.model';

@Component({
	selector: 'app-block',
	templateUrl: './block.component.html',
	styleUrls: ['./block.component.scss'],
})
export class BlockComponent {

	@Input()
	block: TIndicatorDetailsBlock;

	constructor() {
	}

}

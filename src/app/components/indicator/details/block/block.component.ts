import {Component, Input} from '@angular/core';
import {TIndicatorDetailsBlock} from '../../../../models/indicator.model';
import {TBlockColumn, TBlockWithHeader} from '../../../../models/blocks.model';

@Component({
	selector: 'app-block',
	templateUrl: './block.component.html',
	styleUrls: ['./block.component.scss'],
})
export class BlockComponent {

	@Input()
	block: TIndicatorDetailsBlock | TBlockWithHeader | TBlockColumn;

	constructor() {
	}

}

import {Component, Input} from '@angular/core';
import {BlockComponent} from '../../indicator/details/block/block.component';
import {TBlockColumn} from '../../../models/blocks.model';

@Component({
	selector: 'app-block-columns',
	templateUrl: './block-columns.component.html',
	styleUrls: ['../../indicator/details/block/block.component.scss','./block-columns.component.scss'],
})
export class BlockColumnsComponent extends BlockComponent {
	@Input()
	block: TBlockColumn;

	constructor() {
		super();
	}

}

import {Component, Input} from '@angular/core';
import {BlockComponent} from '../../indicator/details/block/block.component';
import {TBlockWithHeader, TBlockWithHeaderValues} from '../../../models/blocks.model';
import {TIndicatorDetailsBlockValueTypeText} from '../../../models/indicator.model';

@Component({
	selector: 'app-block-with-header',
	templateUrl: './block-with-header.component.html',
	styleUrls: ['../../indicator/details/block/block.component.scss','./block-with-header.component.scss'],
})
export class BlockWithHeaderComponent extends BlockComponent {

	@Input()
	block: TBlockWithHeader;

	constructor() {
		super();
	}


	transformItem(item: TBlockWithHeaderValues): TIndicatorDetailsBlockValueTypeText {
		return {
			type: 'text',
			name: item.name,
			title: item.name,
			value: item.value,
			suffix: null,
		};
	}
}

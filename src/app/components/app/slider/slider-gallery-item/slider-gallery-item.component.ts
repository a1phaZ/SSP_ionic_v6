import {Component, Input} from '@angular/core';
import {TSliderGalleryItem} from '../../../../models/slider.model';

@Component({
	selector: 'app-slider-gallery-item',
	templateUrl: './slider-gallery-item.component.html',
	styleUrls: ['./slider-gallery-item.component.scss'],
})
export class SliderGalleryItemComponent {

	@Input()
	slide: TSliderGalleryItem;

	uploadsPath = 'https://ssp.keyauto.ru/backbone/possesions/uploads/';

	constructor() {
	}

}

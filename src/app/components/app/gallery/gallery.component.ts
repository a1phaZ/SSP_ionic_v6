import {Component} from '@angular/core';
import {SliderComponent} from '../slider/slider.component';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent extends SliderComponent {

	constructor() {
		super();
	}

}

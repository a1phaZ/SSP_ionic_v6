import {NgModule} from '@angular/core';
import {SliderComponent} from './slider.component';
import {IonicModule} from '@ionic/angular';
import {SliderGalleryItemComponent} from './slider-gallery-item/slider-gallery-item.component';

@NgModule({
	declarations: [SliderComponent, SliderGalleryItemComponent],
	exports: [SliderComponent, SliderGalleryItemComponent],
	imports: [
		IonicModule
	]
})
export class SliderModule {

}

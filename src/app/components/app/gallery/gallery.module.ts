import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from './gallery.component';
import {SliderModule} from '../slider/slider.module';

@NgModule({
	imports: [IonicModule, CommonModule, SliderModule],
	declarations: [GalleryComponent],
	exports: [GalleryComponent]
})
export class GalleryModule {}

import {NgModule} from '@angular/core';
import {IconsBarComponent} from './icons-bar.component';
import {CommonModule} from '@angular/common';
import {IconModule} from '../app/icon/icon.module';

@NgModule({
	declarations: [IconsBarComponent],
	imports: [
		CommonModule,
		IconModule
	],
	exports: [IconsBarComponent]
})
export class IconsBarModule {}

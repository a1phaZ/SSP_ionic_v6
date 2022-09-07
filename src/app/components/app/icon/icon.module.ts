import {NgModule} from '@angular/core';
import {IconComponent} from './icon.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [IconComponent],
	imports: [
		IonicModule,
		CommonModule
	],
	exports: [IconComponent]
})
export class IconModule {}

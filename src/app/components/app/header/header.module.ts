import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {IonicModule} from '@ionic/angular';
import {CustomIconButtonModule} from '../../custom-icon-button/custom-icon.button.module';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [HeaderComponent],
	imports: [
		IonicModule,
		CommonModule,
		CustomIconButtonModule
	],
	exports: [HeaderComponent]
})
export class HeaderModule {}

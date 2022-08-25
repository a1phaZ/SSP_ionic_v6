import {NgModule} from '@angular/core';
import {CustomIconButtonComponent} from './custom-icon-button.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
	imports: [IonicModule.forRoot(), CommonModule],
	declarations: [CustomIconButtonComponent],
	exports: [CustomIconButtonComponent]
})
export class CustomIconButtonModule {}

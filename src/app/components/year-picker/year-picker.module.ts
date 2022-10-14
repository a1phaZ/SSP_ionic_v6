import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YearPickerComponent} from './year-picker.component';
import {CustomIconButtonModule} from '../custom-icon-button/custom-icon.button.module';



@NgModule({
  declarations: [YearPickerComponent],
	imports: [
		CommonModule,
		CustomIconButtonModule
	],
	exports: [YearPickerComponent]
})
export class YearPickerModule { }

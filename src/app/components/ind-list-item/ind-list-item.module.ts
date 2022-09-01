import {NgModule} from '@angular/core';
import {IndListItemComponent} from './ind-list-item.component';
import {CustomIconButtonModule} from '../custom-icon-button/custom-icon.button.module';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [IndListItemComponent],
	imports: [
		CustomIconButtonModule,
		CommonModule
	],
	exports: [IndListItemComponent]
})
export class IndListItemModule {}

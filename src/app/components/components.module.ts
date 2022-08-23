import {NgModule} from '@angular/core';
import {LoaderComponent} from './loader/loader.component';
import {DashboardItemComponent} from './dashboard-item/dashboard-item.component';
import {CommonModule} from '@angular/common';
import {PipesModule} from '../pipes/pipes.module';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';
import {IndListItemComponent} from './ind-list-item/ind-list-item.component';
import {IndListComponent} from './ind-list/ind-list.component';
import {IonicModule} from '@ionic/angular';
import {CustomIconButtonComponent} from './custom-icon-button/custom-icon-button.component';
import {DetailsComponent} from './indicator/details/details.component';
import {BlockComponent} from './indicator/details/block/block.component';
import {ItemTextComponent} from './indicator/details/block/item-text/item-text.component';
import {ItemBarComponent} from './indicator/details/block/item-bar/item-bar.component';

const indicatorComponents = [
	DetailsComponent,
	BlockComponent,
	ItemTextComponent,
	ItemBarComponent
];

@NgModule({
	declarations: [
		LoaderComponent,
		DashboardItemComponent,
		DashboardListComponent,
		IndListItemComponent,
		IndListComponent,
		CustomIconButtonComponent,
		indicatorComponents
	],
	exports: [
		LoaderComponent,
		DashboardItemComponent,
		DashboardListComponent,
		IndListItemComponent,
		IndListComponent,
		CustomIconButtonComponent,
		indicatorComponents
	],
	imports: [
		CommonModule,
		PipesModule,
		IonicModule
	],
	// providers: [LoaderComponent]
})
export class ComponentsModule {

}

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

@NgModule({
	declarations: [
		LoaderComponent,
		DashboardItemComponent,
		DashboardListComponent,
		IndListItemComponent,
		IndListComponent,
		CustomIconButtonComponent
	],
	exports: [
		LoaderComponent,
		DashboardItemComponent,
		DashboardListComponent,
		IndListItemComponent,
		IndListComponent,
		CustomIconButtonComponent
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

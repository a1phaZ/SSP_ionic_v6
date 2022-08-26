import {NgModule} from '@angular/core';
import {LoaderComponent} from './loader/loader.component';
import {DashboardItemComponent} from './dashboard-item/dashboard-item.component';
import {CommonModule} from '@angular/common';
import {PipesModule} from '../pipes/pipes.module';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';
import {IndListItemComponent} from './ind-list-item/ind-list-item.component';
import {ListComponent} from './list/list.component';
import {IonicModule} from '@ionic/angular';
import {DetailsComponent} from './indicator/details/details.component';
import {BlockComponent} from './indicator/details/block/block.component';
import {ItemTextComponent} from './indicator/details/block/item-text/item-text.component';
import {ItemBarComponent} from './indicator/details/block/item-bar/item-bar.component';
import {TableComponent} from './table/table.component';
import {CustomIconButtonModule} from './custom-icon-button/custom-icon.button.module';
import {TableRowComponent} from './table/table-row/table-row.component';
import {ChartComponent} from './chart/chart.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {HeaderComponent} from './app/header/header.component';
import {ItemComponent} from './list/item/item.component';
import {OrgListItemComponent} from './org-list-item/org-list-item.component';

const appComponents = [
	HeaderComponent
];

const indicatorComponents = [
	DetailsComponent,
	BlockComponent,
	ItemTextComponent,
	ItemBarComponent
];

const tableComponents = [
	TableComponent,
	TableRowComponent
];

@NgModule({
	declarations: [
		appComponents,
		LoaderComponent,
		DashboardItemComponent,
		DashboardListComponent,
		IndListItemComponent,
		ListComponent,
		ItemComponent,
		indicatorComponents,
		tableComponents,
		ChartComponent,
		OrgListItemComponent
	],
	exports: [
		appComponents,
		LoaderComponent,
		DashboardItemComponent,
		DashboardListComponent,
		IndListItemComponent,
		ListComponent,
		ItemComponent,
		indicatorComponents,
		tableComponents,
		ChartComponent,
		OrgListItemComponent
	],
	imports: [
		CommonModule,
		PipesModule,
		IonicModule,
		CustomIconButtonModule,
		HighchartsChartModule,
	],
	// providers: [LoaderComponent]
})
export class ComponentsModule {

}

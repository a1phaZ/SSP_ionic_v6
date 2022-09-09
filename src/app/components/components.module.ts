import {NgModule} from '@angular/core';
import {LoaderComponent} from './loader/loader.component';
import {DashboardItemComponent} from './dashboard-item/dashboard-item.component';
import {CommonModule} from '@angular/common';
import {PipesModule} from '../pipes/pipes.module';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';
import {ListComponent} from './list/list.component';
import {IonicModule} from '@ionic/angular';
import {DetailsComponent} from './indicator/details/details.component';
import {BlockComponent} from './indicator/details/block/block.component';
import {ItemTextComponent} from './indicator/details/block/item-text/item-text.component';
import {ItemBarComponent} from './indicator/details/block/item-bar/item-bar.component';
import {TableComponent} from './table/table.component';
import {CustomIconButtonModule} from './custom-icon-button/custom-icon.button.module';
import {TableRowComponent} from './table/table-row/table-row.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {ItemComponent} from './list/item/item.component';
import {OrgListItemComponent} from './org-list-item/org-list-item.component';
import {HeaderModule} from './app/header/header.module';
import {IndListComponent} from './ind-list/ind-list.component';
import {OrgsListComponent} from './orgs-list/orgs-list.component';
import {PickerComponent} from './picker/picker.component';
import {CustomIconButtonWithTextComponent} from './custom-icon-button-with-text/custom-icon-button-with-text.component';
import {ButtonsWrapperComponent} from './buttons-wrapper/buttons-wrapper.component';
import {DirectionsBarComponent} from './directions-bar/directions-bar.component';
import {ItemsBarComponent} from './base/items-bar/items-bar.component';
import {IndSegmentedListItemComponent} from './ind-segmented-list-item/ind-segmented-list-item.component';
import {IndListItemModule} from './ind-list-item/ind-list-item.module';
import {IndSegmentedListComponent} from './ind-segmented-list/ind-segmented-list.component';
import {IndProgressListItemComponent} from './ind-progress-list-item/ind-progress-list-item.component';
import {ChartsModule} from './charts/charts.module';
import {IndProgressListComponent} from './ind-progress-list/ind-progress-list.component';
import {SimpleListItemComponent} from './simple-list-item/simple-list-item.component';
import {SimpleListComponent} from './simple-list/simple-list.component';
import {ArrayDescriptionListItemComponent} from './array-description-list-item/array-description-list-item.component';
import {ArrayDescriptionListComponent} from './array-description-list/array-description-list.component';
import {TimelineComponent} from './timeline/timeline.component';
import {TimelineItemComponent} from './timeline-item/timeline-item.component';
import {BlockWithHeaderComponent} from './blocks/block-with-header/block-with-header.component';
import {SimpleRatingListItemComponent} from './simple-rating-list-item/simple-rating-list-item.component';
import {SimpleRatingListComponent} from './simple-rating-list/simple-rating-list.component';
import {BlockColumnsComponent} from './blocks/block-columns/block-columns.component';
import {ItemsModule} from './items/items.module';
import {LogoModule} from './app/logo/logo.module';

const appComponents = [
	PickerComponent,
	ItemsBarComponent,
	DirectionsBarComponent,
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
		IndSegmentedListItemComponent,
		IndListComponent,
		ArrayDescriptionListItemComponent,
		ArrayDescriptionListComponent,
		SimpleListItemComponent,
		SimpleListComponent,
		IndSegmentedListComponent,
		IndProgressListItemComponent,
		IndProgressListComponent,
		ListComponent,
		ItemComponent,
		indicatorComponents,
		tableComponents,
		OrgListItemComponent,
		OrgsListComponent,
		CustomIconButtonWithTextComponent,
		ButtonsWrapperComponent,
		TimelineItemComponent,
		TimelineComponent,
		BlockWithHeaderComponent,
		BlockColumnsComponent,
		SimpleRatingListItemComponent,
		SimpleRatingListComponent,

	],
	exports: [
		appComponents,
		LoaderComponent,
		DashboardItemComponent,
		DashboardListComponent,
		IndListComponent,
		ArrayDescriptionListItemComponent,
		ArrayDescriptionListComponent,
		SimpleListItemComponent,
		SimpleListComponent,
		IndSegmentedListItemComponent,
		IndProgressListItemComponent,
		IndSegmentedListComponent,
		IndProgressListComponent,
		ListComponent,
		ItemComponent,
		indicatorComponents,
		tableComponents,
		OrgListItemComponent,
		OrgsListComponent,
		CustomIconButtonWithTextComponent,
		ButtonsWrapperComponent,
		TimelineItemComponent,
		TimelineComponent,
		BlockWithHeaderComponent,
		BlockColumnsComponent,
		SimpleRatingListItemComponent,
		SimpleRatingListComponent,

	],
	imports: [
		CommonModule,
		PipesModule,
		IonicModule,
		CustomIconButtonModule,
		HeaderModule,
		HighchartsChartModule,
		IndListItemModule,
		ChartsModule,
		ItemsModule,
		LogoModule
	],
	// providers: [LoaderComponent]
})
export class ComponentsModule {

}

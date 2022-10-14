import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('./base/tabs/tabs.module').then(m => m.TabsPageModule),
		data: {
			header: false,
			tabs: [
				{
					tab: 'phone',
					label: 'Телефон'
				},
				{
					tab: 'login',
					label: 'Логин/Пароль'
				}
			]
		}
	},
	{
		path: 'pin',
		loadChildren: () => import('./pages/pin/pin.module').then(m => m.PinPageModule)
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
	},
	{
		path: '',
		redirectTo: 'auth',
		pathMatch: 'full'
	},
  {
    path: 'security-detail',
    loadChildren: () => import('./pages/security/security-detail/security-detail.module').then( m => m.SecurityDetailPageModule)
  },


];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

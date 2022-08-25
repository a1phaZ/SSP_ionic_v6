import {NgModule} from '@angular/core';
import {WebApiService} from './web-api.service';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import {CrisisService} from './crisis.service';
import {TableService} from './table.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [WebApiService, AppService, CrisisService, TableService],
  // exports: [WebApiService, AppService]
})
export class ServiceModule {}

import {NgModule} from '@angular/core';
import {WebApiService} from './web-api.service';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [WebApiService, AppService],
  // exports: [WebApiService, AppService]
})
export class ServiceModule {}

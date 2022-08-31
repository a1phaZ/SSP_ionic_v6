import {NgModule} from '@angular/core';
import {WebApiService} from './web-api.service';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import {CrisisService} from './crisis.service';
import {TableService} from './table.service';
import {LogoService} from './logo.service';
import {ModalService} from './modal.service';
import {DomService} from './dom.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [WebApiService, AppService, CrisisService, TableService, LogoService, ModalService, DomService],
  // exports: [WebApiService, AppService]
})
export class ServiceModule {}

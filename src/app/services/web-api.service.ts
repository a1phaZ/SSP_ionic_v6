import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppService} from './app.service';
import {ApiModel} from '../models/api.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(
    private httpClient: HttpClient,
    private appService: AppService
  ) { }

  get$(url: string, params: any = {}) {
    // console.log('web api get params', params);
    return this.httpClient.get(`${this.appService.urlValue}${url}`, {
      params: new HttpParams({
        fromObject: {...params}
      })
    });
  }

  post$(url: string, data: any) {
    // console.log('web api post params', data);
    return this.httpClient.post(`${this.appService.urlValue}${url}`, data, {responseType: 'json'});
  }

  getValidUrl() {
    this.get$(ApiModel.getAppUrl)
      .pipe(
        tap((data: { url: string }) => this.appService.urlValue = data.url)
      )
      .subscribe();
  }
}

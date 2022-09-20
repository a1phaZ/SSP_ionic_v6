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
	  const d = this.prepareFormData(data);
    return this.httpClient.post(`${this.appService.urlValue}${url}`, d, {responseType: 'json'});
  }

  getValidUrl() {
    this.get$(ApiModel.getAppUrl)
      .pipe(
        tap((data: { url: string }) => this.appService.urlValue = data.url)
      )
      .subscribe();
  }

	prepareFormData(data) {
		const _data = { ...data };
		const fd = new FormData();

		// _data.user = localStorage.getItem("userID") || "";
		// if (!data.token) {
		// 	_data.token = localStorage.getItem('authKey') || '';
		// }

		Object.keys(_data).forEach((key) => {
			fd.append(key, _data[key]);
		});

		return fd;
	}
}

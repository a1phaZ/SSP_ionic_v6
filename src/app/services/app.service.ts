import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: BehaviorSubject<string> = new BehaviorSubject<string>(environment.serverUrl);

  constructor() {
  }

  get urlValue() {
    return this.url.value;
  }

  set urlValue(value) {
    this.url.next(value);
  }
}

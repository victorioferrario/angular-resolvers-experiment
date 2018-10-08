import { Injectable } from '@angular/core';
import { IConfig } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = `${environment.apiUrl}config.json`;
  constructor(private http: HttpClient) {}
  getConfig(): Observable<IConfig> {
    return this.http.get<IConfig>(this.configUrl);
  }
}

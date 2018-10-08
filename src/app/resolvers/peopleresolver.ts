import { Resolve } from '@angular/router';
import { People } from '../shared/models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapTo, delay } from 'rxjs/operators';

@Injectable()
export class PeopleResolver implements Resolve<People> {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  resolve(): Observable<People> {
    return this.getDelayed().pipe(delay(2000));
    // return
  }
  getDelayed(): Observable<People> {
    return this.http.get<People>(this.apiUrl).pipe();
  }
}

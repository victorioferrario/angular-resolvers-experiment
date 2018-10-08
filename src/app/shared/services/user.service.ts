import { Injectable } from '@angular/core';
import { IUser, IUserHttp } from '../models';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list: IUser[];
  refList: BehaviorSubject<IUserHttp>;
  constructor() {
    this.list = [
      { id: 1, name: 'Manny Fresh', cardNumber: '34234243', cardType: 'visa' },
      {
        id: 2,
        name: 'Karl Burns',
        cardNumber: '34234243',
        cardType: 'mastercard'
      },
      {
        id: 3,
        name: 'Jean Wycliff',
        cardNumber: '32423277777',
        cardType: 'visa'
      }
    ];
    const http: IUserHttp = {
      users: this.list
    };
    this.refList = new BehaviorSubject<IUserHttp>(http);

    this.refList.asObservable();
  }

  public getUsers(): Observable<IUserHttp> {
    setTimeout(() => {
      return this.refList;
    }, 1000);
    return this.refList;
  }
}

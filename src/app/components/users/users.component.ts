import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IUser } from '../../shared/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'cardNumber', 'cardType'];
  dataSource: any;

  @Input()
  users: IUser[];
  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.dataSource = this.users;
  }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}

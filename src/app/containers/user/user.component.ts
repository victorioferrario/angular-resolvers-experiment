import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../shared/store/state/app.state';
import { selectSelectedUser } from '../../shared/store/selectors/user.selector';
import { GetUser } from '../../shared/store/actions/user.actions';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }
}

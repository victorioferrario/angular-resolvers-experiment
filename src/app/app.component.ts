import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

import { IAppState } from './shared/store/state/app.state';
import { GetConfig } from './shared/store/actions/config.actions';
import { selectConfig } from './shared/store/selectors/config.selector';
import { routerTransition } from './core/animation/router.animations';
import { SlimLoadingBarService } from './shared/components/slim-loading';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  isLoading: BehaviorSubject<boolean>;
  config$ = this._store.pipe(select(selectConfig));

  constructor(
    private _store: Store<IAppState>,
    private ctxRouter: Router,
    private slimLoadService: SlimLoadingBarService
  ) {
    const self = this;
    self.isLoading = new BehaviorSubject<boolean>(false);
    self.isLoading.asObservable();

    self.ctxRouter.events.subscribe((event: Event) => {
      self.navigationInterceptor(event);
    });
  }

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  navigationInterceptor(event: Event) {
    const self = this;
    if (event instanceof NavigationStart) {
      if (event.url === '/people') {
        self.isLoading.next(true);
      }
    }
    if (event instanceof NavigationEnd) {
      self.isLoading.next(false);
      this.slimLoadService.complete();
      // console.log('instanceofevent-navigation');
    }
    if (event instanceof NavigationStart) {
      this.slimLoadService.start();
      // this.slimLoadingBarService.start();
    }
    if (event instanceof NavigationEnd) {
      // this.slimLoadingBarService.complete();
    }
    if (event instanceof NavigationCancel) {
      // this.slimLoadingBarService.stop();
    }
    if (event instanceof NavigationError) {
      this.slimLoadService.stop();
    }
  }
}

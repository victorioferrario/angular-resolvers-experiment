import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user.reducer';
import { IAppState } from '../state/app.state';
import { configReducer } from './config.reducer';
import { routerReducer } from '@ngrx/router-store';

export const appReducer: ActionReducerMap<IAppState, any> = {
  users: userReducer,
  config: configReducer,
  router: routerReducer
};

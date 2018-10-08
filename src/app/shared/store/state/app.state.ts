import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';

export interface IAppState {
  users: IUserState;
  config: IConfigState;
  router?: RouterReducerState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}

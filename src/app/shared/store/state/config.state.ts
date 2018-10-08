import { IConfig } from '../../models/IConfig';
export interface IConfigState {
  config: IConfig;
}
export const initialConfigState: IConfigState = {
  config: null
};

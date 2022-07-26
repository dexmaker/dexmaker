import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
  PreloadedState,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { dexReducer, DexState } from './reducers/dexReducer';

const reducer = combineReducers({ dex: dexReducer });

export type RootState = CombinedState<{ dex: DexState }>;

export const store = (preloadedState: PreloadedState<RootState>) =>
  configureStore({
    preloadedState,
    reducer,
  });

export const rootSelector = (state: RootState) => state;

export type PagePropsWithState = { state: RootState };

export type AppDispatch = ThunkDispatch<RootState, null, AnyAction>;

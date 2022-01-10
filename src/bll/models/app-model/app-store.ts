import { createStore, createEvent } from 'effector';
import { TInitialState } from './types';

export const $app = createStore<TInitialState>({ tabBar: true });

export const setViewBar = createEvent<boolean>();

export const $authUser = createStore<boolean>(false);

export const setAuthUser = createEvent<boolean>();

$app.on(setViewBar, (state, payload) => {
  return { ...state, tabBar: payload };
});

$authUser.on(setAuthUser, (state, payload) => payload);

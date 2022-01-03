import {createStore, createEvent} from 'effector'
import { TInitialState } from './types';

export const $app = createStore<TInitialState>({tabBar:  true});

export const setViewBar = createEvent<boolean>()

$app.on(setViewBar, (state, payload) => {
    return {...state, tabBar : payload} 
})
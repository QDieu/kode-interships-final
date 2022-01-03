import {createStore, createEvent, sample} from 'effector'
import { TStoreType } from './types';

export const clearData = createEvent();

export const $mainData = createStore<TStoreType>([]).reset(clearData);

export const setData = createEvent<TStoreType>()

export const $filter = createStore<string>('');

export const setFilter = createEvent<string>();

$mainData.on(setData, (state, payload) => {return [...state, ...payload]});

$filter.on(setFilter, (state, payload) => payload);



export const $filterData = $mainData.map((service) => service)



sample({
    source : $mainData,
    clock : $filter,
    fn : (data, filter) => data.filter(item => item.service_name.toLocaleLowerCase().includes(filter.toLowerCase())),
    target: $filterData
})
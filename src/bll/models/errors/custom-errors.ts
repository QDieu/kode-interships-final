import {createStore, createEvent, sample, guard, createEffect} from 'effector'
import { CustomError } from './types';

type CustomErrorStore = Array<CustomError>

export const $errors = createStore<CustomErrorStore>([]);

export const updateErrors = createEvent<CustomErrorStore>();
export const addError = createEvent<CustomError>();

export const removeFirstError = createEvent();
export const clearErrors = createEvent();

$errors.on (updateErrors, (_, payload) => payload);

$errors.on(addError, (state, {id = Date.now(), text, delay = 1000}) => {
    let flag = false;
    state.map((item) => {if (item.text === text) flag = true})
    if (flag) return state;
    let temp = [...state, {id,text, delay}];
    return temp;
})

$errors.on(removeFirstError, (state) => {
    let result = state;
    result.shift();
    return result;
})

$errors.reset(clearErrors);

export const $currentError = createStore<CustomError>({text : '', delay : 1000});

export const updateCurrentError = createEvent<CustomError>();

export const clearCurrentError = createEvent();

$currentError.reset(clearCurrentError)

export const workCurrentErrorFx = createEffect((myError : CustomError) => {
    setTimeout(() => {
        clearCurrentError();
        removeFirstError();
        toogleFlag(true);
        nextCurrentError();
    }, myError.delay)
})

workCurrentErrorFx.pending.watch(() => 'i`m done');

$currentError.on(updateCurrentError, (state, payload) => payload)

export const touchErrors = createEvent();

const toogleFlag = createEvent<boolean>();

export let isEmptyCurrentError = createStore(true).on(toogleFlag, (state, payload : boolean)=> {
    payload
});

const guardTouchUpdate = createEvent();
const nextCurrentError = createEvent();

//при обновлении уведомить что массив обновился
guard({
 source: $errors,
 filter : isEmptyCurrentError,
 target : guardTouchUpdate,
})

//Трогает effect чтобы взять следующую ошибку
guard({
    source: $errors,
    clock : nextCurrentError,
    filter : data => data.length > 0,
    target : guardTouchUpdate,
})

//Обновление ошибок и текущей ошибки
sample({
    source : $errors,
    clock : guardTouchUpdate,
    fn : (data) => {
        toogleFlag(false);
        let firstError = data[0];
        if (firstError != undefined) {
        return firstError};
        return {text : ''};
    },
    target: updateCurrentError,
})

guard({
    source : $currentError,
    filter : data => data.text.length > 0,
    target : workCurrentErrorFx,
})
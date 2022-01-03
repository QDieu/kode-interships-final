import { createStore, createEvent } from 'effector';
import { TInitialState, TOtp } from './types';

export const $auth = createStore<TInitialState>({ flagKeyboard: false });

export const setKeyboardView = createEvent<boolean>();

export const $otp = createStore<TOtp>({
  otpCode: '',
  otpId: '',
  phone: '',
});

export const setOtpData = createEvent<TOtp>();

$otp.on(setOtpData, (state, payload) => {
  return { ...payload };
});

$auth.on(setKeyboardView, (state, payload) => {
  return { ...state, flagKeyboard: payload };
});

export const $guessToken = createStore<string>('');

export const setGuessToken = createEvent<string>();

$guessToken.on(setGuessToken, (state, payload) => payload);

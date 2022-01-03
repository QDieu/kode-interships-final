import axios from 'axios';
import { TInitialState } from '../../bll/models/payments-model/types';

export const instance = axios.create({
    baseURL: 'https://github.com/kode-frontend/files/raw/main/'
})

export const paymentsAPI = {
    getCategory : () => {
        return instance.get<TInitialState>(`categories.json`).then(res => res.data);
    }
}
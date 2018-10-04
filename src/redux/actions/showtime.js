import { createAction } from 'redux-actions'
import { REQUEST_SHOWTIME, REQUEST_SHOwTIME_SUCCESS, REQUSET_SHOWTIME_FAILED } from './types';

export const requestShowTime = createAction(REQUEST_SHOWTIME)
export const requestShowTimeSuccess = createAction(REQUEST_SHOwTIME_SUCCESS)
export const requestShowTimeFailed = createAction(REQUSET_SHOWTIME_FAILED)
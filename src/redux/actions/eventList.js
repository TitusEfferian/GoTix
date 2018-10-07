import { createAction } from 'redux-actions'
import { REQUEST_EVENT_LIST, REQUEST_EVENT_LIST_FAILED, REQUEST_EVENT_LIST_SUCCESS } from './types';

export const requestEventList = createAction(REQUEST_EVENT_LIST)
export const requestEventListFailed = createAction(REQUEST_EVENT_LIST_FAILED)
export const requestEventListSuccess = createAction(REQUEST_EVENT_LIST_SUCCESS)
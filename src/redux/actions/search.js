import { createAction } from 'redux-actions'
import { REQUEST_SEARCH, REQUEST_SEARCH_SUCCESS, REQUEST_SEARCH_FAILED } from './types';

export const requestSearch = createAction(REQUEST_SEARCH)
export const requestSearchSuccess = createAction(REQUEST_SEARCH_SUCCESS)
export const requestSearchFailed = createAction(REQUEST_SEARCH_FAILED)
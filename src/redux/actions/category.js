import { createAction } from 'redux-actions'
import { REQUEST_CATEGORY, REQUEST_CATEGORY_SUCCESS, REQUEST_CATEGORY_FAILED } from './types';

export const requestCategory = createAction(REQUEST_CATEGORY)
export const requestCategorySuccess = createAction(REQUEST_CATEGORY_SUCCESS)
export const requestCategoryFailed = createAction(REQUEST_CATEGORY_FAILED)

import { createAction } from 'redux-actions'
import { REQUEST_BANNER, REQUEST_BANNER_SUCCESS, REQUEST_BANNER_FAILED } from './types';

export const requestBanner = createAction(REQUEST_BANNER)
export const requestBannerSuccess = createAction(REQUEST_BANNER_SUCCESS)
export const requestBannerFailed = createAction(REQUEST_BANNER_FAILED)
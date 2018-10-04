import { createAction } from 'redux-actions'
import { REQUEST_LOCATION, REQUEST_LOCATION_SUCCESS, REQUEST_LOCATION_FAILED } from './types';


export const requestLocation = createAction(REQUEST_LOCATION)
export const requestLocationSuccess = createAction(REQUEST_LOCATION_SUCCESS)
export const requestLocationFailed = createAction(REQUEST_LOCATION_FAILED)
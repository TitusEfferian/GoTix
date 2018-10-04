import { call, put } from 'redux-saga/effects'
import { REQUEST_LOCATION_SUCCESS, REQUEST_LOCATION_FAILED } from '../redux/actions/types';
import { locationApi } from '../apis/location';



export function* fetchLocation() {
    try {
        const data = yield call(locationApi)
        yield put({ type: REQUEST_LOCATION_SUCCESS, data })
    }
    catch (e) {
        yield put({ type: REQUEST_LOCATION_FAILED, errData: { message: e.message } })
    }
}
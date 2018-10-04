import { call, put } from 'redux-saga/effects'
import { showtimeApi } from '../apis/showtime';
import { REQUEST_SHOwTIME_SUCCESS, REQUSET_SHOWTIME_FAILED } from '../redux/actions/types';


export function* fetchShowtime(actions) {
    try {
        const data = yield call(showtimeApi,actions.payload)
        yield put({ type: REQUEST_SHOwTIME_SUCCESS, data})
    }
    catch (e) {
        yield put({ type: REQUSET_SHOWTIME_FAILED, errData: { message: e.message } })
    }
}
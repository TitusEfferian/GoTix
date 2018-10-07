import { call, put } from 'redux-saga/effects'
import { REQUEST_EVENT_LIST_SUCCESS, REQUEST_EVENT_LIST_FAILED } from '../redux/actions/types';
import { eventListApi } from '../apis/eventList';


export function* fetchEventList() {
    try {
        const data = yield call(eventListApi)
        yield put({ type: REQUEST_EVENT_LIST_SUCCESS, data})
    }
    catch (e) {
        yield put({ type: REQUEST_EVENT_LIST_FAILED, errData: { message: e.message } })
    }
}
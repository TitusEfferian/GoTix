import { call, put } from 'redux-saga/effects'
import { REQUEST_SEARCH_FAILED, REQUEST_SEARCH_SUCCESS } from '../redux/actions/types';
import { searchApi } from '../apis/search';


export function* fetchSearchApi(actions) {
    try {
        const data = yield call(searchApi,actions.payload)
        yield put({ type: REQUEST_SEARCH_SUCCESS, data})
    }
    catch (e) {
        yield put({ type: REQUEST_SEARCH_FAILED, errData: { message: e.message } })
    }
}
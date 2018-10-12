import { call, put } from 'redux-saga/effects'
import { REQUEST_SEARCH, REQUEST_SEARCH_FAILED } from '../redux/actions/types';
import { searchApi } from '../apis/search';


export function* fetchSearchApi() {
    try {
        const data = yield call(searchApi)
        yield put({ type: REQUEST_SEARCH, data})
    }
    catch (e) {
        yield put({ type: REQUEST_SEARCH_FAILED, errData: { message: e.message } })
    }
}
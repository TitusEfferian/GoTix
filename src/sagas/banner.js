import { call, put } from 'redux-saga/effects'
import { REQUEST_BANNER_SUCCESS, REQUEST_BANNER_FAILED } from '../redux/actions/types';
import { bannerApi } from '../apis/banner';


export function* fetchBanner() {
    try {
        const data = yield call(bannerApi)
        yield put({ type: REQUEST_BANNER_SUCCESS, data})
    }
    catch (e) {
        yield put({ type: REQUEST_BANNER_FAILED, errData: { message: e.message } })
    }
}
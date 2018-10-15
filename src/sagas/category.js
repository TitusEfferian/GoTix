import { call, put } from 'redux-saga/effects'
import { REQUEST_CATEGORY_SUCCESS, REQUEST_CATEGORY_FAILED } from '../redux/actions/types';
import { categoryApi } from '../apis/category';


export function* fetchCategoryApi() {
    try {
        const data = yield call(categoryApi)
        yield put({ type: REQUEST_CATEGORY_SUCCESS, data})
    }
    catch (e) {
        yield put({ type: REQUEST_CATEGORY_FAILED, errData: { message: e.message } })
    }
}
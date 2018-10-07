import { call, put } from 'redux-saga/effects'

import { featureMoviesApi } from '../apis/featureMovies';
import { REQUEST_FEATURE_MOVIES_SUCCESS, REQUEST_FEATURE_MOVIES_FAILED } from '../redux/actions/types';


export function* fetchFeatureMovies(actions) {
    try {
        const data = yield call(featureMoviesApi,actions.payload)
        yield put({ type: REQUEST_FEATURE_MOVIES_SUCCESS, data})
    }
    catch (e) {
        yield put({ type: REQUEST_FEATURE_MOVIES_FAILED, errData: { message: e.message } })
    }
}
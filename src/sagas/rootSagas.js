import { all, takeEvery } from 'redux-saga/effects'
import * as Types from '../redux/actions/types'
import { fetchBanner } from './banner';
import { fetchLocation } from './location';
import { fetchShowtime } from './showtime';

export default function* watchSagas() {
    yield all([
        yield takeEvery(Types.REQUEST_BANNER, fetchBanner),
        yield takeEvery(Types.REQUEST_LOCATION, fetchLocation),
        yield takeEvery(Types.REQUEST_SHOWTIME,fetchShowtime)
    ])
}
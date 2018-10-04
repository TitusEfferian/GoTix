import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/reducers/index'
import watchSagas from './sagas/rootSagas'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    let store
    store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(watchSagas)
    return store
}

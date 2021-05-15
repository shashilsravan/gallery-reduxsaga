import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers/index.js'
import rootSaga from './sagas/index'

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
)

sagaMiddleware.run(rootSaga);

export default store
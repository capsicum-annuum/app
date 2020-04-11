import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { AppReducers } from './app.reducer'
import { AppSagas } from './app.saga'

const sagaMiddleware = createSagaMiddleware()

const initializeStore = createStore(
  AppReducers,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(AppSagas)

export { initializeStore }

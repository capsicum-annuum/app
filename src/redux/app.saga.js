import { all, fork } from 'redux-saga/effects'

import { LoginSaga } from './login/login.saga'

function* AppSagas() {
  yield all([fork(LoginSaga)])
}

export { AppSagas }

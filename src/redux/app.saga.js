import { all, fork } from 'redux-saga/effects'

import { LoginSaga } from 'app-redux'

function* AppSagas() {
  yield all([fork(LoginSaga)])
}

export { AppSagas }

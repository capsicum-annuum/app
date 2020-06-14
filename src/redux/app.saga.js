import { all, fork } from 'redux-saga/effects'

import { LoginSaga } from './login/login.saga'
import { RegisterSaga } from './register/register.saga'

function* AppSagas() {
  yield all([fork(LoginSaga), fork(RegisterSaga)])
}

export { AppSagas }

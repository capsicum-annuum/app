import { all, fork } from 'redux-saga/effects'

import { LoginSaga } from './login/login.saga'
import { RegisterSaga } from './register/register.saga'
import { LocationSaga } from './location/location.saga'

function* AppSagas() {
  yield all([fork(LoginSaga), fork(RegisterSaga), fork(LocationSaga)])
}

export { AppSagas }

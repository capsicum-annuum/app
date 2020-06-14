import { put, takeEvery, all } from 'redux-saga/effects'

import { LoginService } from 'app-services'
import { LoginActions } from './login.action'
import { LOGIN_ACTIONS } from './login.constant'

const loginService = new LoginService()

function* loginRequest(action) {
  const { username, password } = action

  try {
    const response = yield put(loginService.login({ username, password }))

    yield put(LoginActions.loginRequestSuccess(response))
  } catch (error) {
    yield put(LoginActions.loginRequestFail(error))
  }
}

function* LoginSaga() {
  yield all([yield takeEvery(LOGIN_ACTIONS.LOGIN_REQUEST, loginRequest)])
}

const LoginSagaFunctions = {
  loginRequest,
}

export { LoginSaga, LoginSagaFunctions }

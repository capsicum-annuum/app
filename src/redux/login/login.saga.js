import { call, put, takeEvery, all, race, take } from 'redux-saga/effects'
import { HttpServices } from 'app-services'
import { makeRequest } from 'app-redux'

import { LoginActions } from './login.action'
import { LOGIN_ACTIONS } from './login.constant'

const http = new HttpServices()

function* loginRequest(action) {
  const { username, password } = action

  yield makeRequest({
    req: http.post,
    url: '',
    data: { username, password },
    onSuccess: (data) => put(LoginActions.loginRequestSuccess(data)),
    onError: (apiResponse) => put(LoginActions.loginRequestFail(apiResponse)),
  })
}

function* LoginSaga() {
  yield all([yield takeEvery(LOGIN_ACTIONS.LOGIN_REQUEST, loginRequest)])
}

const LoginSagaFunctions = {
  loginRequest,
}

export { LoginSaga, LoginSagaFunctions }

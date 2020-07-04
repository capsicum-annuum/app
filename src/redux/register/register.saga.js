import { call, put, takeEvery, all, select } from 'redux-saga/effects'

import { LocationService, RegisterService, LoginService } from 'app-services'
import { RegisterActions } from './register.action'
import { REGISTER_ACTIONS } from './register.constant'

const locationService = new LocationService()
const registerService = new RegisterService()
const loginService = new LoginService()

function* checkBaseUserData({ data }) {
  const { email, cnpj, phone } = data

  try {
    const response = yield call(registerService.checkBaseUserData, {
      cnpj,
      email,
      phone,
    })

    yield put(RegisterActions.checkBaseUserDataSuccess(response))
  } catch (error) {
    yield put(RegisterActions.checkBaseUserDataFail(error))
  }
}

function* fetchCurrentLocation() {
  try {
    const response = yield call(locationService.fetchCurrentLocation)

    const action = response.errorMessage
      ? RegisterActions.fetchCurrentLocationFail
      : RegisterActions.fetchCurrentLocationSuccess

    yield put(action(response))
  } catch (error) {
    yield put(RegisterActions.fetchCurrentLocationFail(error))
  }
}

function* fetchSkills() {
  try {
    const response = yield call(registerService.fetchSkills)

    yield put(RegisterActions.fetchSkillsSuccess(response))
  } catch (error) {
    yield put(RegisterActions.fetchSkillsFail(error))
  }
}

function* fetchCauses() {
  try {
    const response = yield call(registerService.fetchCauses)

    yield put(RegisterActions.fetchCausesSuccess(response))
  } catch (error) {
    yield put(RegisterActions.fetchCurrentLocationFail(error))
  }
}

function* registerRequest() {
  const data = yield select((state) => state.RegisterReducer)
  const { email: username, password } = data

  try {
    const response = yield call(registerService.registerRequest, data)

    yield call(loginService.login, { username, password })

    yield put(RegisterActions.registerSuccess(response))
  } catch (error) {
    yield put(RegisterActions.registerFail(error))
  }
}

function* RegisterSaga() {
  yield all([
    yield takeEvery(
      REGISTER_ACTIONS.CHECK_BASE_USER_DATA_REQUEST,
      checkBaseUserData,
    ),
    yield takeEvery(
      REGISTER_ACTIONS.FETCH_CURRENT_LOCATION_REQUEST,
      fetchCurrentLocation,
    ),
    yield takeEvery(REGISTER_ACTIONS.FETCH_CAUSES_REQUEST, fetchCauses),
    yield takeEvery(REGISTER_ACTIONS.FETCH_SKILLS_REQUEST, fetchSkills),
    yield takeEvery(REGISTER_ACTIONS.REGISTER_REQUEST, registerRequest),
  ])
}

const RegisterSagaFunctions = {
  checkBaseUserData,
  fetchCurrentLocation,
  fetchCauses,
  fetchSkills,
}

export { RegisterSaga, RegisterSagaFunctions }

import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LocationService } from 'app-services'
import { LOCATION_ACTIONS } from './location.constant'
import { LocationActions } from './location.action'

const locationService = new LocationService()

function* fetchCitiesRequest({ id }) {
  try {
    const response = yield call(locationService.fetchCities, id)

    yield put(LocationActions.fetchCitiesSuccess(response))
  } catch (error) {
    yield put(LocationActions.fetchCitiesFail(error))
  }
}

function* fetchStatesRequest() {
  try {
    const response = yield call(locationService.fetchStates)

    yield put(LocationActions.fetchStatesSuccess(response))
  } catch (error) {
    yield put(LocationActions.fetchStatesFail(error))
  }
}

function* LocationSaga() {
  yield all([
    yield takeEvery(LOCATION_ACTIONS.FETCH_CITIES_REQUEST, fetchCitiesRequest),
    yield takeEvery(LOCATION_ACTIONS.FETCH_STATES_REQUEST, fetchStatesRequest),
  ])
}

const LocationSagaFunctions = {}

export { LocationSaga, LocationSagaFunctions }

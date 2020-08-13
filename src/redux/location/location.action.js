import { LOCATION_ACTIONS } from './location.constant'

const fetchCitiesRequest = (id) => {
  return {
    type: LOCATION_ACTIONS.FETCH_CITIES_REQUEST,
    id,
  }
}

const fetchCitiesSuccess = (data) => {
  return {
    type: LOCATION_ACTIONS.FETCH_CITIES_SUCCESS,
    data,
  }
}

const fetchCitiesFail = () => {
  return {
    type: LOCATION_ACTIONS.FETCH_CITIES_ERROR,
  }
}

const clearFetchCities = () => {
  return {
    type: LOCATION_ACTIONS.CLEAR_FETCH_CITIES,
  }
}

const fetchStatesRequest = () => {
  return {
    type: LOCATION_ACTIONS.FETCH_STATES_REQUEST,
  }
}

const fetchStatesSuccess = (data) => {
  return {
    type: LOCATION_ACTIONS.FETCH_STATES_SUCCESS,
    data,
  }
}

const fetchStatesFail = () => {
  return {
    type: LOCATION_ACTIONS.FETCH_STATES_ERROR,
  }
}

const clearFetchStates = () => {
  return {
    type: LOCATION_ACTIONS.CLEAR_FETCH_STATES,
  }
}

export const LocationActions = {
  fetchCitiesRequest,
  fetchCitiesSuccess,
  fetchCitiesFail,
  clearFetchCities,
  fetchStatesRequest,
  fetchStatesSuccess,
  fetchStatesFail,
  clearFetchStates,
}

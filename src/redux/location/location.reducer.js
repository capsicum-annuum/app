import { LOCATION_ACTIONS } from './location.constant'

const INITIAL_CITIES_STATE = {
  citiesDataSuccess: [],
  citiesDataError: null,
  citiesLoader: false,
}

const INITIAL_STATES_STATE = {
  statesDataSuccess: [],
  statesDataError: null,
  statesLoader: false,
}

const INITIAL_STATE = {
  ...INITIAL_CITIES_STATE,
  ...INITIAL_STATES_STATE,
}

function LocationReducer(state = INITIAL_STATE, action) {
  const { type, data, error } = action

  switch (type) {
    case LOCATION_ACTIONS.FETCH_CITIES_REQUEST:
      return {
        ...state,
        citiesDataSuccess: [],
        citiesDataError: null,
        citiesLoader: true,
      }
    case LOCATION_ACTIONS.FETCH_CITIES_SUCCESS:
      return {
        ...state,
        citiesDataSuccess: data,
        citiesLoader: false,
      }
    case LOCATION_ACTIONS.FETCH_CITIES_ERROR:
      return {
        ...state,
        citiesDataError: error,
        citiesLoader: false,
      }
    case LOCATION_ACTIONS.CLEAR_FETCH_CITIES:
      return {
        ...state,
        ...INITIAL_CITIES_STATE,
      }
    case LOCATION_ACTIONS.FETCH_STATES_REQUEST:
      return {
        ...state,
        citiesDataSuccess: [],
        statesDataSuccess: [],
        statesDataError: null,
        statesLoader: true,
      }
    case LOCATION_ACTIONS.FETCH_STATES_SUCCESS:
      return {
        ...state,
        statesDataSuccess: data,
        statesLoader: false,
      }
    case LOCATION_ACTIONS.FETCH_STATES_ERROR:
      return {
        ...state,
        statesDataError: error,
        statesLoader: false,
      }
    case LOCATION_ACTIONS.CLEAR_FETCH_STATES:
      return {
        ...state,
        ...INITIAL_STATES_STATE,
      }
    default:
      return state
  }
}

export { LocationReducer }

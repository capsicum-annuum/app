import { REGISTER_ACTIONS } from './register.constant'

const INITIAL_BASE_USER_DATA = {
  role: '',
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  phone: '',
  cpnj: '',
  checkBaseUserDataLoader: false,
}

const INITIAL_USER_DATA = {
  photo: null,
  description: '',
  causes: [],
  skills: [],
  availability: [],
  location: {
    stateName: '',
    cityName: '',
    district: '',
    neighborhood: '',
    federatedUnityAcronym: '',
    latitude: null,
    longitude: null,
  },
  disabledButtons: false,
}

const INITIAL_REGISTER_REQUEST = {
  registerRequestErrorData: false,
  registerRequestSuccessData: false,
}

const INITIAL_STATE = {
  ...INITIAL_BASE_USER_DATA,
  ...INITIAL_USER_DATA,
  ...INITIAL_REGISTER_REQUEST,
  currentLocationErrorData: false,
  currentLocationLoader: false,
  causesList: [],
  causesLoader: false,
  causesDataError: false,
  skillsList: [],
  skillsLoader: false,
  skillsDataError: false,
}

function RegisterReducer(state = INITIAL_STATE, action) {
  const { type, data, error } = action

  switch (type) {
    case REGISTER_ACTIONS.SET_BASE_USER_DATA:
      return { ...state, ...data }
    case REGISTER_ACTIONS.CLEAR_BASE_USER_DATA:
      return {
        ...state,
        ...INITIAL_BASE_USER_DATA,
      }
    case REGISTER_ACTIONS.CHECK_BASE_USER_DATA_REQUEST:
      return {
        ...state,
        checkBaseUserDataError: false,
        checkBaseUserDataLoader: true,
      }
    case REGISTER_ACTIONS.CHECK_BASE_USER_DATA_SUCCESS:
      return {
        ...state,
        checkBaseUserDataSuccess: data,
        checkBaseUserDataLoader: false,
      }
    case REGISTER_ACTIONS.CHECK_BASE_USER_DATA_FAIL:
      return {
        ...state,
        checkBaseUserDataError: false,
        checkBaseUserDataLoader: false,
      }
    case REGISTER_ACTIONS.UPDATE_USER_DATA:
      return { ...state, ...data }
    case REGISTER_ACTIONS.CLEAR_USER_DATA:
      return {
        ...state,
        ...INITIAL_USER_DATA,
      }
    case REGISTER_ACTIONS.FETCH_CURRENT_LOCATION_REQUEST:
      return {
        ...state,
        currentLocationLoader: true,
        currentLocationErrorData: false,
      }
    case REGISTER_ACTIONS.FETCH_CURRENT_LOCATION_SUCCESS:
      return {
        ...state,
        ...data,
        currentLocationLoader: false,
        disabledButtons: true,
      }
    case REGISTER_ACTIONS.FETCH_CURRENT_LOCATION_FAIL:
      return {
        ...state,
        ...data,
        currentLocationLoader: false,
        disabledButtons: false,
        currentLocationErrorData: error,
      }
    case REGISTER_ACTIONS.CLEAR_CURRENT_LOCATION_ERROR:
      return {
        ...state,
        currentLocationErrorData: false,
      }
    case REGISTER_ACTIONS.FETCH_SKILLS_REQUEST:
      return {
        ...state,
        skillList: [],
        skillsLoader: true,
        skillsDataError: false,
      }
    case REGISTER_ACTIONS.FETCH_SKILLS_SUCCESS: {
      return {
        ...state,
        skillsList: data,
        skillsLoader: false,
      }
    }
    case REGISTER_ACTIONS.FETCH_SKILLS_FAIL:
      return {
        ...state,
        skillsLoader: false,
        skillsDataError: error,
      }
    case REGISTER_ACTIONS.CLEAR_SKILLS_ERROR:
      return {
        ...state,
        skillsDataError: false,
      }
    case REGISTER_ACTIONS.FETCH_CAUSES_REQUEST:
      return {
        ...state,
        causesList: [],
        causesLoader: true,
        causesDataError: false,
      }
    case REGISTER_ACTIONS.FETCH_CAUSES_SUCCESS:
      return {
        ...state,
        causesList: data,
        causesLoader: false,
      }
    case REGISTER_ACTIONS.FETCH_CAUSES_FAIL:
      return {
        ...state,
        causesDataError: error,
        causesLoader: false,
      }
    case REGISTER_ACTIONS.CLEAR_CAUSES_ERROR:
      return {
        ...state,
        causesDataError: false,
      }
    case REGISTER_ACTIONS.REGISTER_REQUEST:
      return {
        ...state,
        registerRequestSuccessData: null,
        registerRequestErrorData: null,
      }
    case REGISTER_ACTIONS.REGISTER_SUCCESS:
      return {
        ...state,
        registerRequestSuccessData: data,
      }
    case REGISTER_ACTIONS.REGISTER_ERROR:
      return {
        ...state,
        registerRequestErrorData: error,
      }
    case REGISTER_ACTIONS.CLEAR_REGISTER_REQUEST:
      return {
        ...state,
        registerRequestSuccessData: null,
        registerRequestErrorData: null,
      }
    default:
      return state
  }
}

export { RegisterReducer }

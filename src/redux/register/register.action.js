import { REGISTER_ACTIONS } from './register.constant'

const setBaseUserData = (data) => {
  return {
    type: REGISTER_ACTIONS.SET_BASE_USER_DATA,
    data,
  }
}

const clearBaseUserData = () => {
  return {
    type: REGISTER_ACTIONS.CLEAR_BASE_USER_DATA,
  }
}

const checkBaseUserDataRequest = (data) => {
  return {
    type: REGISTER_ACTIONS.CHECK_BASE_USER_DATA_REQUEST,
    data,
  }
}

const checkBaseUserDataSuccess = (data) => {
  return {
    type: REGISTER_ACTIONS.CHECK_BASE_USER_DATA_SUCCESS,
    data,
  }
}

const checkBaseUserDataFail = (error) => {
  return {
    type: REGISTER_ACTIONS.CHECK_BASE_USER_DATA_FAIL,
    error,
  }
}

const clearCheckBaseUserData = () => {
  return {
    type: REGISTER_ACTIONS.CLEAR_CHECK_BASE_USER_DATA,
  }
}

const updateUserData = (data) => {
  return {
    type: REGISTER_ACTIONS.UPDATE_USER_DATA,
    data,
  }
}

const clearUserData = () => {
  return {
    type: REGISTER_ACTIONS.CLEAR_USER_DATA,
  }
}

const fetchCurrentLocationRequest = () => {
  return {
    type: REGISTER_ACTIONS.FETCH_CURRENT_LOCATION_REQUEST,
  }
}

const fetchCurrentLocationSuccess = (data) => {
  return {
    type: REGISTER_ACTIONS.FETCH_CURRENT_LOCATION_SUCCESS,
    data,
  }
}

const fetchCurrentLocationFail = (error) => {
  return {
    type: REGISTER_ACTIONS.FETCH_CURRENT_LOCATION_FAIL,
    error,
  }
}

const clearCurrentLocationError = () => {
  return {
    type: REGISTER_ACTIONS.CLEAR_CURRENT_LOCATION_ERROR,
  }
}

const fetchSkillsRequest = () => {
  return {
    type: REGISTER_ACTIONS.FETCH_SKILLS_REQUEST,
  }
}

const fetchSkillsSuccess = (data) => {
  return {
    type: REGISTER_ACTIONS.FETCH_SKILLS_SUCCESS,
    data,
  }
}

const fetchSkillsFail = (error) => {
  return {
    type: REGISTER_ACTIONS.FETCH_SKILLS_FAIL,
    error,
  }
}

const clearSkillsError = () => {
  return {
    type: REGISTER_ACTIONS.CLEAR_SKILLS_ERROR,
  }
}

const fetchCausesRequest = () => {
  return {
    type: REGISTER_ACTIONS.FETCH_CAUSES_REQUEST,
  }
}

const fetchCausesSuccess = (data) => {
  return {
    type: REGISTER_ACTIONS.FETCH_CAUSES_SUCCESS,
    data,
  }
}

const fetchCausesFail = (error) => {
  return {
    type: REGISTER_ACTIONS.FETCH_CAUSES_FAIL,
    error,
  }
}

const clearCausesError = () => {
  return {
    type: REGISTER_ACTIONS.CLEAR_CAUSES_ERROR,
  }
}

export const RegisterActions = {
  setBaseUserData,
  clearBaseUserData,
  checkBaseUserDataRequest,
  checkBaseUserDataSuccess,
  checkBaseUserDataFail,
  clearCheckBaseUserData,
  updateUserData,
  clearUserData,
  fetchCurrentLocationRequest,
  fetchCurrentLocationSuccess,
  fetchCurrentLocationFail,
  clearCurrentLocationError,
  fetchCausesRequest,
  fetchCausesSuccess,
  fetchCausesFail,
  clearCausesError,
  fetchSkillsRequest,
  fetchSkillsSuccess,
  fetchSkillsFail,
  clearSkillsError,
}

import { LOGIN_ACTIONS } from './login.constant'

const loginRequest = ({ username, password }) => {
  return {
    type: LOGIN_ACTIONS.LOGIN_REQUEST,
    username,
    password,
  }
}

const loginRequestSuccess = () => {
  return {
    type: LOGIN_ACTIONS.LOGIN_REQUEST_SUCCESS,
  }
}

const loginRequestFail = () => {
  return {
    type: LOGIN_ACTIONS.LOGIN_REQUEST_FAIL,
  }
}

const clear = () => {
  return {
    type: LOGIN_ACTIONS.CLEAR,
  }
}

export const LoginActions = {
  loginRequest,
  loginRequestSuccess,
  loginRequestFail,
  clear,
}

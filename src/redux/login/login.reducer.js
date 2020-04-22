import { LOGIN_ACTIONS } from './login.constant'

const INITIAL_STATE = {
  username: undefined,
  password: undefined,
  error: undefined,
  success: undefined,
  showLoader: false,
}

function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_ACTIONS.LOGIN_REQUEST:
      return { ...state, error: undefined, showLoader: true }
    case LOGIN_ACTIONS.LOGIN_REQUEST_SUCCESS:
      return { ...state, success: true, showLoader: false }
    case LOGIN_ACTIONS.LOGIN_REQUEST_FAIL:
      return { ...state, showLoader: false, error: action.error }
    case LOGIN_ACTIONS.CLEAR:
      return { ...state, ...INITIAL_STATE }
    default:
      return state
  }
}

export { LoginReducer }

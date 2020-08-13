import { combineReducers } from 'redux'

import { LoginReducer } from './login/login.reducer'
import { RegisterReducer } from './register/register.reducer'
import { LocationReducer } from './location/location.reducer'

const AppReducers = combineReducers({
  LoginReducer,
  RegisterReducer,
  LocationReducer,
})

export { AppReducers }

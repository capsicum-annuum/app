import { combineReducers } from 'redux'

import { LoginReducer } from './login/login.reducer'
import { RegisterReducer } from './register/register.reducer'

const AppReducers = combineReducers({ LoginReducer, RegisterReducer })

export { AppReducers }

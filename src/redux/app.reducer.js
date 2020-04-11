import { combineReducers } from 'redux'

import { LoginReducer } from './login/login.reducer'

const AppReducers = combineReducers({ LoginReducer })

export { AppReducers }

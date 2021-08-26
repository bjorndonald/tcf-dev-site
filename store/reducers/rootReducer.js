import configReducer from './configReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  config: configReducer
})

export default rootReducer

// the key name will be the data property on the state object

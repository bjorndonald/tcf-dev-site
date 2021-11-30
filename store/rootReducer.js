import configReducer from './reducers/configReducer'
import { combineReducers } from 'redux'
import articlesReducer from './articles'
import authReducer from './auth'

const rootReducer = combineReducers({
  config: configReducer,
  articles: articlesReducer,
  auth: authReducer
})

export default rootReducer

// the key name will be the data property on the state object

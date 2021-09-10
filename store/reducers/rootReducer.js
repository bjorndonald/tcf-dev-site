import configReducer from './configReducer'
import { combineReducers } from 'redux'
import articlesReducer from './articles'

const rootReducer = combineReducers({
  config: configReducer,
  articles: articlesReducer
})

export default rootReducer

// the key name will be the data property on the state object

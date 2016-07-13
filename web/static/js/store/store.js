import {createStore, combineReducers} from 'redux'
import {createReducer} from 'redux-act'
import {getAllNews, getAllSequentials, newsReady, sequentialsReady, switchFooter, hideFooter} from './actions'

// REDUCERS
const newsReducer = createReducer({
  [getAllNews]: (state, payload) => [...payload]
}, [])
const sequentialsReducer = createReducer({
  [getAllSequentials]: (state, payload) => [...payload]
}, [])
const newsReadyReducer = createReducer({
  [newsReady]: () => true
}, false)
const sequentialsReadyReducer = createReducer({
  [sequentialsReady]: () => true
}, false)
const footerReducer = createReducer({
  [switchFooter]: (state) => !state,
  [hideFooter]: () => false
}, false)


// REDUX TREE
const reducers = combineReducers(
  { news: newsReducer
  , sequentials: sequentialsReducer
  , news_ready: newsReadyReducer
  , sequentials_ready: sequentialsReadyReducer
  , footer_visible: footerReducer
  }
)

// STORE
const store = createStore(reducers)

export default store

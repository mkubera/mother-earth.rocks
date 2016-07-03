import {createStore, combineReducers} from 'redux'
import {createReducer} from 'redux-act'
import {getAllNews, getAllSequentials} from './actions'

// REDUCERS
const newsReducer = createReducer({
  [getAllNews]: (state, payload) => [...payload]
}, [])

const sequentialsReducer = createReducer({
  [getAllSequentials]: (state, payload) => [...payload]
}, [])


// const newsReducer = (state = [], action) => {
//   if (action.type === "ALL_NEWS") {
//     const new_state = [...state, ...action.news]
//     return new_state
//   }
//   return state
// }
// const sequentialsReducer = (state = [], action) => {
//   if (action.type === "ALL_SEQUENTIALS") {
//     const new_state = [...state, ...action.sequentials]
//     return new_state
//   }
//   return state
// }

// REDUX TREE
const reducers = combineReducers({
  news: newsReducer,
  sequentials: sequentialsReducer
})

// STORE
const store = createStore(reducers)

export default store

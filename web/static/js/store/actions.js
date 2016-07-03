import {createAction} from 'redux-act'

// ACTIONS
const getAllNews = createAction("Gets all News from the channel.");
const getAllSequentials = createAction("Gets all Sequentials from the channel.");

export { getAllNews, getAllSequentials }

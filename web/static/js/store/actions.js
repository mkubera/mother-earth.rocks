import {createAction} from 'redux-act'

// ACTIONS
const getAllNews = createAction("Gets all News from the channel.");
const getAllSequentials = createAction("Gets all Sequentials from the channel.");
const newsReady = createAction("Are the News fetched from the channel in Redux?");
const sequentialsReady = createAction("Are the Sequentials fetched from the channel in Redux?");
const switchFooter = createAction("Show/hide Footer.");
const hideFooter = createAction("Hide Footer.");

export {getAllNews, getAllSequentials, newsReady, sequentialsReady, switchFooter, hideFooter}

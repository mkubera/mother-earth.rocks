import React from 'react'
import {Provider} from 'react-redux'
import {store, MainLayout, Landing, Home, News, Sequentials, Future, About, Admin, Footer, NotFound} from './paths'
import {Router, Route, Redirect, browserHistory} from 'react-router'

export default class AppRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Landing} />
          <Route component={MainLayout}>
            {/*
            <Route path="/home" component={Home} />
            */}
            <Route path="/news" component={News} />
            <Route path="/sequentials" component={Sequentials} />
            <Route path="/future" component={Future} />
            <Route path="/about" component={About} />
            <Route path="/admin" component={Admin} />

            <Redirect from="/home" to="/news" />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

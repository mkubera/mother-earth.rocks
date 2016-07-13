import React from 'react'
import {socket, store, store_actions, utils_channel, AppRouter} from './paths'

export default class Main extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // Join "news:all" & "sequentials:all" -> get data -> push data to Redux
    // In other components (News, Sequentials) -> fetch data from Redux
    const news_all = socket.channel("news:all", {})
    const sequentials_all = socket.channel("sequentials:all", {})

    utils_channel.join_1(news_all)
    utils_channel.join_1(sequentials_all)

    news_all.on("findAll", ({data}) => {
      store.dispatch(store_actions.getAllNews(data))
      store.dispatch(store_actions.newsReady())
    })
    sequentials_all.on("findAll", ({data}) => {
      store.dispatch(store_actions.getAllSequentials(data))
      store.dispatch(store_actions.sequentialsReady())
    })
  }

  render () {
    return (
      <AppRouter />
    )
  }
}

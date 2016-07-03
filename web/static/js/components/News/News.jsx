import React from 'react'
import {connect} from 'react-redux'
import {socket, store, store_actions, utils_channel, NewsList, Loading} from 'web/static/js/paths'

class News extends React.Component {
  constructor() {
    super()

    this.state =
      { data_loaded: false
      }

    this.news_all = socket.channel("news:all", {})
  }

  componentDidMount() {
    utils_channel.join_1(this.news_all)

    this.news_all.on("news_all", ({data}) => {
      store.dispatch(store_actions.getAllNews(data))
      // store.dispatch({
      //   type: "ALL_NEWS",
      //   news: data
      // })
    })
  }

  componentDidUpdate() {
    if (!this.state.data_loaded)
      this.setState({data_loaded: true})
  }

  componentWillUnmount() {
    utils_channel.leave_1(this.news_all)
  }

  render() {
    const data_loaded = this.state.data_loaded;
    var newsHtml;

    if (data_loaded) {
      const no_news_just_yet = store.getState().news.length === 0

      newsHtml = no_news_just_yet
        ? (<p>No news just yet...</p>)
        : <NewsList news={this.props.news} />
    } else {
      newsHtml = <Loading />
    }

    return (
      <div className="content-news">
        <h1>
          <span className="octicon octicon-bell"></span>
          News
        </h1>
        <br />

        {newsHtml}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    news: store.news  //pass 'store.news' to 'this.props.news'
  }
}

export default connect(mapStateToProps)(News)

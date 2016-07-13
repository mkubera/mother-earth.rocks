import React from 'react'
import {connect} from 'react-redux'
import {socket, store, store_actions, utils_channel, NewsList, Loading} from '../../paths'

class News extends React.Component {
  render() {
    const data_loaded = this.props.news_ready;
    var newsHtml;

    if (data_loaded) {
      const no_news = this.props.news.length === 0

      newsHtml = no_news
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

        <div id="newsHtml">
          {newsHtml}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    news: store.news,  //pass 'store.news' to 'this.props.news'
    news_ready: store.news_ready
  }
}

export default connect(mapStateToProps)(News)

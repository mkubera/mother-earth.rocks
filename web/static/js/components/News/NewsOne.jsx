import React, {Component, PropTypes} from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import _ from 'lodash'

export default class NewsOne extends Component {
  render() {
    const formatted_timestamp = moment(this.props.one.ts).format("D MMMM YYYY")

    return (
      <div className="one one-news">
        <small className="content-news-date">{_.toUpper(formatted_timestamp)}</small><br/>
        <h3>{this.props.one.title}</h3>
        <p>
          <small><i>by {this.props.one.author}</i></small>
        </p>
        <div className="content-news-text">
          <ReactMarkdown source={this.props.one.text} />
        </div>
      </div>
    )
  }
}

NewsOne.propTypes = {
  one: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    ts: PropTypes.string.isRequired
  })
}

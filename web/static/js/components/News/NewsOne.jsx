import React from 'react'
import ReactMarkdown from 'react-markdown'
import {utils_date} from 'web/static/js/paths'

const NewsOne = (props) => {
  return (
    <div className="one one-news">
      <h3>{props.one.title}</h3>
      <p>
        <small className="content-news-date">{utils_date.basicDate(props.one.ts)}</small><br/>
        <small><i>by {props.one.author}</i></small>
      </p>
      <ReactMarkdown source={props.one.text} />
    </div>
  )
}

NewsOne.propTypes = {
  one: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    ts: React.PropTypes.string.isRequired
  })
}

export default NewsOne

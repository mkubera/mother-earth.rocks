import React from 'react'
import NewsOne from './NewsOne'

const NewsList = (props) => {
  return (
    <div>
      {props.news.map(function (one) {
        return <NewsOne key={one.id} one={one} />
      })}
    </div>
  )
}

NewsList.propTypes = {
  news: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    ts: React.PropTypes.string.isRequired
  }))
}

export default NewsList

import React, {Component, PropTypes} from 'react'
import NewsOne from './NewsOne.jsx'

export default class NewsList extends Component {
  render() {
    return (
      <div>
      {this.props.news.map((one) => {
        return <NewsOne key={one.id} one={one} />
      })}
      </div>
    )
  }
}

NewsList.propTypes = {
  news: PropTypes.arrayOf(React.PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    ts: PropTypes.string.isRequired
  }))
}

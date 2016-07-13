import React, {Component, PropTypes} from 'react'
import {SequentialsOne} from '../../paths'

export default class SequentialsList extends Component {
  render() {
    return (
      <div>
      {this.props.sequentials.map((one) => {
        return <SequentialsOne key={one.id} one={one} />
      })}
      </div>
    )
  }
}

SequentialsList.propTypes = {
  sequentials: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    download: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    authors: PropTypes.shape({
      writer: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }),
    ts: PropTypes.string.isRequired
  }))
}

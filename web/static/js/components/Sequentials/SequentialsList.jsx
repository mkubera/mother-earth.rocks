import React from 'react'
import {SequentialsOne} from 'web/static/js/paths'

const SequentialsList = (props) => {
  return (
    <div>
      {props.sequentials.map(one => {
        return <SequentialsOne key={one.id} one={one} />
      })}
    </div>
  )
}

SequentialsList.propTypes = {
  sequentials: React.PropTypes.arrayOf(React.PropTypes.shape({
    img: React.PropTypes.string.isRequired,
    img2: React.PropTypes.string.isRequired,
    download: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    authors: React.PropTypes.shape({
      writer: React.PropTypes.string.isRequired,
      artist: React.PropTypes.string.isRequired
    }),
    ts: React.PropTypes.string.isRequired
  }))
}

export default SequentialsList

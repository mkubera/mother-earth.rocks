import React, {Component, PropTypes} from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import SequentialsOneDownload from './SequentialsOneDownload.jsx'
import SequentialsOneBuy from './SequentialsOneBuy.jsx'
import {SequentialsOneImg} from '../../paths'

export default class SequentialsOne extends Component {
  render() {
    const {id, img, img2, download, title, price, description, pages, ts} = this.props.one;
    const {writer, artist} = this.props.one.authors;

    var priceOrFree = price === 0
      ? "free"
      : `£${price}`

    const formatted_timestamp = moment(ts).format("Do MMMM YYYY")

    var downloadOrBuy = price === 0
      ? <SequentialsOneDownload download={download} />
      : downloadOrBuy = <SequentialsOneBuy />

    return (
      <div key={id} className="one one-sequential">
        <div className="imgs">
          <SequentialsOneImg
            name="cover"
            img={img}
            title={title} />

          <SequentialsOneImg
            name="sample page"
            img={img2}
            title={title} />
        </div>

        <h3>{title} <small className="mandarine">[{priceOrFree}]</small></h3>
        <div className="one-sequential-description">
          <ReactMarkdown source={description} />
        </div>

        <h4>Details</h4>
        <p className="one-sequential-details">
          released: <b>{formatted_timestamp}</b> <br/>
          written by <b>{writer}</b>, drawn by <b>{artist}</b> <br/>
          pages count: <b>{pages}</b><br/>
        </p>

        {downloadOrBuy}
      </div>
    )
  }
}

SequentialsOne.propTypes = {
  one: PropTypes.shape({
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
  })
}

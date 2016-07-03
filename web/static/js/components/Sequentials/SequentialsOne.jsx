import React from 'react'
import ReactMarkdown from 'react-markdown'
import SequentialsOneDownload from './SequentialsOneDownload'
import SequentialsOneBuy from './SequentialsOneBuy'
import {utils_date, SequentialsOneImg} from 'web/static/js/paths'

const SequentialsOne = (props) => {
  const {id, img, img2, download, title, price, description, pages, ts} = props.one;
  const {writer, artist} = props.one.authors;
  const {onClickImg, onClickImg2, img_enlarged, img2_enlarged} = props;
  // var imgClass;

  var priceOrFree = price === 0
    ? "free"
    : `£${price}`

  var downloadOrBuy = price === 0
    ? <SequentialsOneDownload download={download} title={title} />
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
      <p>
        <i>
          <ReactMarkdown source={description} />
        </i>
      </p>

      <h4>Details</h4>
      <p>
        released: <b>{utils_date.basicDate(ts)}</b> <br/>
        written by <b>{writer}</b>, drawn by <b>{artist}</b> <br/>
        pages count: <b>{pages}</b> <br/>
      </p>

      {downloadOrBuy}
    </div>
  )
}

SequentialsOne.propTypes = {
  one: React.PropTypes.shape({
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
  })
}

export default SequentialsOne

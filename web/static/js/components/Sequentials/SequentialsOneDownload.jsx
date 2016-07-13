import React, {Component, PropTypes} from 'react'

export default class SequentialsOneDownload extends Component {
  render() {
    const {download} = this.props

    return (
      <div>
        <p>
          <a href={`files/${download}`} target="_blank">
            <button className="btn btn-download">
              Download
            </button>
          </a>
        </p>
      </div>
    )
  }
}

SequentialsOneDownload.propTypes = {
  download: PropTypes.string.isRequired
}

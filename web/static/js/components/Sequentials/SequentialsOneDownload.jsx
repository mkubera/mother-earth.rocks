import React from 'react'

const SequentialsOneDownload = ({download, title}) => {
  return (
    <div>
      <p>
        <a href={`files/${download}`} target="_blank">
          <button className="btn btn-download">
            Download {/*<small><i>{title}</i></small>*/}
          </button>
        </a>
      </p>
    </div>
  )
}

export default SequentialsOneDownload

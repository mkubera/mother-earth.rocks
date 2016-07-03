import React from 'react'
import ReactMarkdown from 'react-markdown'
import FutureMd from './FutureMd'

const Future = () => {
  return (
    <div className="content-future">
      <h1>
        <span className="octicon octicon-comment-discussion"></span>
        Future
      </h1>
      <ReactMarkdown source={FutureMd} />
    </div>
  )
}

export default Future

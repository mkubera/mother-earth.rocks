import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <Link activeClassName="active" to={props.to}>
      <div className="navLink" title={props.title}>
        <span className={`octicon octicon-${props.icon}`}></span>
        <p className="navLink-name">{props.title}</p>
      </div>
    </Link>
  )
}

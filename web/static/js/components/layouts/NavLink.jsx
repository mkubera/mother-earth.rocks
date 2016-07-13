import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const NavLink = (props) => {
  return (
    <Link activeClassName="active" to={props.to} onClick={props.hideFooter}>
      <div className="navLink" title={props.title}>
        <span className={`octicon octicon-${props.icon}`}></span>
        <p className="navLink-name">{props.title}</p>
      </div>
    </Link>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  hideFooter: PropTypes.func.isRequired,
}

export default NavLink

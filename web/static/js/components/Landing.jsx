import React from 'react'
import {Link} from 'react-router'

export default class Landing extends React.Component {

  render() {
    return (
      <div className="landing">
        <div className="landing-inner">
          <Link to="/home">
            <img src="images/WMUH_logo_horizontal-small.svg" alt="What Makes Us Human logo"/>
            <h4>sequential stories for the unborn generations</h4>
          </Link>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}

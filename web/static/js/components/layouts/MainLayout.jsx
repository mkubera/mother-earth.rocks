import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {store, store_actions, Footer} from '../../paths'
import NavLink from './NavLink.jsx'

class MainLayout extends React.Component {
  constructor() {
    super()

    this.root_routes =
      [ ["/", "Intro", "arrow-left"]
      // , ["/home", "Welcome", "smiley"]
      , ["/about", "About", "question"]
      , ["/news", "News", "bell"]
      , ["/sequentials", "Sequentials", "comment"]
      , ["/future", "Future", "comment-discussion"]
      , ["/admin", "Admin", "database"]
      ]

    this.switchFooter = this.switchFooter.bind(this)
    this.hideFooter = this.hideFooter.bind(this)
  }

  switchFooter() {
    store.dispatch(store_actions.switchFooter())
  }

  hideFooter() {
    store.dispatch(store_actions.hideFooter())
  }

  render() {
    const footerClass = this.props.footer_visible
      ? "footer"
      : "footer footer-hidden";

    const footer_a = this.props.footer_visible
      ? "a a-active"
      : "a";

    return (
      <div className="wrapper">
        {/* NAV */}
        <div className="nav">
          <div className="nav-top">
            {this.root_routes.map((r) => {
              return <NavLink key={r[1]} to={r[0]} title={r[1]} icon={r[2]} hideFooter={this.hideFooter} />
            })}
          </div>
          <div className="nav-bottom">
            <div className={footer_a}>
              <div className="navLink" title="Footer" onClick={this.switchFooter}>
                <span className="octicon octicon-plus"></span>
                <p className="navLink-name">Footer</p>
              </div>
            </div>
          </div>
        </div>

        {/* YIELD */}
        <div className="content active">
          {this.props.children}
        </div>

        {/* FLOATINGS */}
        <div className={footerClass}>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    footer_visible: store.footer_visible //pass 'store.footer_visible' to 'this.props.footer_visible'
  }
}

export default connect(mapStateToProps)(MainLayout)

import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'

export default class MainLayout extends React.Component {
  constructor() {
    super()

    this.root_routes =
      [ ["/", "Intro", "arrow-left"]
      // , ["/home", "Welcome", "smiley"]
      , ["/news", "News", "bell"]
      , ["/sequentials", "Sequentials", "comment"]
      , ["/future", "Future", "comment-discussion"]
      , ["/about", "About", "question"]
      , ["/admin", "Admin", "database"]
      // , ["/home", "Footer", "plus"]
      ]
  }

  render() {
    return (
      <div className="wrapper">
        <div className="nav">
          <div className="nav-top">
            {this.root_routes.map((r) => {
              return <NavLink key={r[1]} to={r[0]} title={r[1]} icon={r[2]} />
            })}
          </div>
          <div className="nav-bottom">
            <NavLink to="/footer" title="Footer" icon="plus" />
          </div>

        </div>
        <div className="content active">
          {this.props.children}
        </div>
      </div>
    )
  }
}

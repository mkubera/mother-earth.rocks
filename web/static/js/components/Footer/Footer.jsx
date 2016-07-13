import React from 'react'

export default class Footer extends React.Component {
  constructor() {
    super()

    this.friends =
    [ ["https://newsurrealcomics.blogspot.co.uk/", "New Surreal Comics"]
    ]
  }

  render () {
    return (
      <div className="footer-flex">
        <div>
          <h2>Twitter</h2>
          <a href="https://twitter/rainteller" target="_blank"><b>@rainteller</b></a> <br/>
        </div>

        <div>
          <h2>Friends</h2>
          {this.friends.map((f) => {
            return (
              <div key={f[1]}>
                <a href={f[0]} target="_blank"><b>{f[1]}</b></a>
                <br/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

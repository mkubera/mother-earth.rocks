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
      <div>
        <h1>
          <span className="octicon octicon-plus"></span>
          Footer
        </h1>
        <br/>

        <h2>Twitter</h2>
        <a href="https://twitter/rainteller" target="_blank"><b>@rainteller</b></a> <br/>
        <br/>

        <h2>Friends</h2>
        {this.friends.map((f) => {
          return (
            <div>
              <a key={f[1]} href={f[0]} target="_blank"><b>{f[1]}</b></a>
              <br/>
            </div>
          )
        })}
      </div>
    )
  }
}

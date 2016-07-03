import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {socket, store, store_actions, utils_channel, SequentialsList, Loading} from 'web/static/js/paths'

class Sequentials extends React.Component {
  constructor() {
    super()

    this.state =
      { data_loaded: false
      , img_enlarged: false
      , img2_enlarged: false
      }

    this.sequentials_all = socket.channel("sequentials:all", {})
  }

  componentDidMount() {
    utils_channel.join_1(this.sequentials_all)

    this.sequentials_all.on("sequentials_all", ({data}) => {
      store.dispatch(store_actions.getAllSequentials(data))
    })
  }

  componentDidUpdate() {
    if (!this.state.data_loaded)
      this.setState({data_loaded: true})
  }

  componentWillUnmount() {
    utils_channel.leave_1(this.sequentials_all)
  }

  render() {
    const data_loaded = this.state.data_loaded;
    var seqHtml;

    if (data_loaded) {
      const no_sequentials_just_yet = store.getState().sequentials.length === 0

      seqHtml = no_sequentials_just_yet
        ? (<p>No Sequentials just yet... <br/><br/> See what the <Link to="/future">Future</Link> holds.</p>)
        : <SequentialsList sequentials={this.props.sequentials} />
    } else {
      seqHtml = <Loading />
    }

    return (
      <div>
        <h1>
          <span className="octicon octicon-comment"></span>
          Sequentials
        </h1>
        <br />

        {seqHtml}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return { sequentials: store.sequentials }
}

export default connect(mapStateToProps)(Sequentials)

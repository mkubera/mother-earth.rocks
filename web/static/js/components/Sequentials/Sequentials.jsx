import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {socket, store, store_actions, utils_channel, SequentialsList, Loading} from '../../paths'

class Sequentials extends React.Component {
  render() {
    const data_loaded = this.props.sequentials_ready;
    var seqHtml;

    if (data_loaded) {
      const no_sequentials = this.props.sequentials.length === 0

      seqHtml = no_sequentials
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
  return {
    sequentials: store.sequentials,
    sequentials_ready: store.sequentials_ready
  }
}

export default connect(mapStateToProps)(Sequentials)

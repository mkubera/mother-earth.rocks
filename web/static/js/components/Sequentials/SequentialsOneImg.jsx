import React, {Component, PropTypes} from 'react'

export default class SequentialsOneImg extends Component {
  constructor(props) {
    super()

    this.state =
      { enlarged: false
      }

    this.switchEnlarged = this.switchEnlarged.bind(this)
  }

  switchEnlarged() {
    this.setState({enlarged: !this.state.enlarged})
  }

  render() {
    const imgClass = this.state.enlarged
        ? "img img-enlarged"
        : "img img-notenlarged"

    const {name, img, title} = this.props;

    return (
      <div className={imgClass} onClick={this.switchEnlarged}>
        <div>
          <img src={`images/${img}`} alt={`cover: ${title}`} />
          <p className="img-name">{name}</p>
        </div>
      </div>
    )
  }
}

SequentialsOneImg.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

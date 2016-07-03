import React from 'react'

export default class SequentialsOneImg extends React.Component {
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

// const SequentialsOneImg = ({onClickImg, onClickImg2, img_enlarged, img2_enlarged, img, title}) => {
//   const imgClass = img_enlarged
//     ? "img img-enlarged"
//     : "img img-notenlarged"
//
//   return (
//     <div className={imgClass} onClick={onClickImg}>
//       <img src={`images/${img}`} alt={`cover: ${title}`} />
//     </div>
//   )
// }
//
// export default SequentialsOneImg

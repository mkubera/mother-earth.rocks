import React from 'react'

const FormButton = (props) => {
  return (
    <div>
      <button className="btn btn-form" onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default FormButton

import React from 'react'
import _ from 'lodash'

const FormInput = (props) => {
  var input;

  if (props.type === "text") {
    input = (
      <input name={props.name} type={props.type} value={props.value}  onChange={props.onChange} /> )
  } else {
    input = (
      <input name={props.name} type={props.type} min="0" max="100" maxlength="6" step="1" value={props.value} onChange={props.onChange} /> )
  }

  return (
    <div className="form-input">
      <label htmlFor={props.name}>
      {_.capitalize(props.name)}&nbsp;
      <small><i>{props.note ? `(${props.note})` : ""}</i></small>
      </label><br/>
      {input}<br />
    </div>
  )
}

//proptypes
// props.note is OPTIONAL
// props.defaultValue is OPTIONAL

export default FormInput

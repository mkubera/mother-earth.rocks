import React from 'react'
import _ from 'lodash'

const FormTextarea = (props) => {
  return (
    <div className="form-textarea">
      <label htmlFor={props.name}>
        {_.capitalize(props.name)}&nbsp;
        <small><i>{props.note ? `(${props.note})` : ""}</i></small>
      </label><br/>
      <textarea name={props.name} value={props.value} onChange={props.onChange} /><br />
    </div>
  )
}

//proptypes
// props.note is OPTIONAL

export default FormTextarea

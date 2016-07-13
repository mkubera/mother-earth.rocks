import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class FormTextarea extends Component {
  render() {
    const {name, note, value, onChange} = this.props

    return (
      <div className="form-textarea">
        <label htmlFor={name}>
          {_.capitalize(name)} <small><i>{note ? `(${note})` : ""}</i></small>
        </label><br/>
        <textarea name={name} value={value} onChange={onChange} /><br />
      </div>
    )
  }
}

FormTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  note: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

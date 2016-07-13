import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class FormInput extends Component {
  render() {
    const {name, type, value, note, onChange} = this.props

    const input = type === "text"
      ? ( <input name={name} type={type} value={value} onChange={onChange} /> )
      : ( <input name={name} type={type} min="0" max="100" maxLength="6" step="1" value={value} onChange={onChange} /> )

    return (
      <div className="form-input">
        <label htmlFor={name}>
          {_.capitalize(name)} <small><i>{note ? `(${note})` : ""}</i></small>
        </label><br/>
        {input}<br />
      </div>
    )
  }
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  note: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

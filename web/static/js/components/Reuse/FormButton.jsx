import React, {PropTypes} from 'react'

const FormButton = ({onClick, text}) => {
  return (
    <div>
      <button className="btn btn-form" onClick={onClick}>{text}</button>
    </div>
  )
}

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FormButton

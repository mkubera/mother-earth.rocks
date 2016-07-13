import React, {Component, PropTypes} from 'react'
import {socket, FormInput, FormTextarea, FormButton} from '../../paths'

export default class AdminAddNewsForm extends Component {
  render() {
    const {onChange, submitForm} = this.props;
    const {title, text, author} = this.props.state;
    return (
      <div>
      <form autoComplete="off" noValidate>
        <fieldset>
          <legend><h3>Add a News</h3></legend>

          <FormInput name="title" type="text" onChange={onChange} value={title} />
          <FormTextarea name="text" onChange={onChange} value={text} />
          <FormInput name="author" type="text" onChange={onChange} value={author} />
          <br/>

          <FormButton onClick={submitForm} text="Send" />
        </fieldset>
      </form>
      </div>
    )
  }
}

AdminAddNewsForm.propTypes = {
  one: PropTypes.shape({
    img: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    download: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    authors: PropTypes.shape({
      writer: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }),
    ts: PropTypes.string.isRequired
  })
}

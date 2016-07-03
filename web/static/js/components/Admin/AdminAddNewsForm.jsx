import React from 'react'
import {socket, FormInput, FormTextarea, FormButton} from 'web/static/js/paths'

const AdminAddNewsForm = (props) => {
  const {title, text, author} = props.state;
  return (
    <div>
      <form autocomplete="off" novalidate>
        <fieldset>
          <legend><h3>Add a News</h3></legend>
          <FormInput name="title" type="text" onChange={props.onChange} value={title} />
          <FormTextarea name="text" onChange={props.onChange} value={text} />
          <FormInput name="author" type="text" onChange={props.onChange} value={author} />
          <br/>
          <FormButton onClick={props.submitForm} text="Send" />
        </fieldset>
      </form>
    </div>
  )
}


export default AdminAddNewsForm

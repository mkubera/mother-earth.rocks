import React from 'react'
import {socket, FormInput, FormTextarea, FormButton} from 'web/static/js/paths'

const AdminAddSequentialForm = (props) => {
  const {img, img2, download, title, description, pages, price} = props.state;
  const {writer, artist} = props.state.authors;
  return (
    <div>
      <form autocomplete="off" novalidate>
        <fieldset>
          <legend><h3>Add a Sequential</h3></legend>
          <FormInput name="img" note="the path to your image (manually) placed in web/static/assets/images folder" type="text" onChange={props.onChange} value={img} />
          <FormInput name="img2" note="the path to your image (manually) placed in web/static/assets/images folder" type="text" onChange={props.onChange} value={img2} />
          <FormInput name="download" note="the path to your file (manually) placed in web/static/assets/downloads folder" type="text" onChange={props.onChange} value={download} />
          <FormInput name="title" type="text" onChange={props.onChange} value={title} />
          <FormTextarea name="description" note="use Markdown" onChange={props.onChange} value={description} />
          <FormInput name="pages" type="number" defaultValue="0" onChange={props.onChange} value={pages}  />
          <FormInput name="price" type="number" defaultValue="0" onChange={props.onChange} value={price}  />
          <FormInput name="authors.writer" type="text" onChange={props.onChange} value={writer} />
          <FormInput name="authors.artist" type="text" onChange={props.onChange} value={artist} />
          <br/>
          <FormButton onClick={props.submitForm} text="Send" />
        </fieldset>
      </form>
    </div>
  )
}



export default AdminAddSequentialForm

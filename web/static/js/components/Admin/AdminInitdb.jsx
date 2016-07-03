import React from 'react'
import {FormButton} from 'web/static/js/paths'

const AdminInitdb = (props) => {
  return (
    <div>
      Create db &amp; tables ("news" &amp; "sequentials") in the db: &nbsp;
      <FormButton onClick={props.initDb} text="init" />
    </div>
  )
}

export default AdminInitdb

import React, {PropTypes} from 'react'
import {FormButton} from '../../paths'

const AdminInitdb = (props) => {
  return (
    <div>
      Create db ("mother") &amp; tables ("news" &amp; "sequentials") in the db: &nbsp;
      <FormButton onClick={props.initDb} text="init" />
    </div>
  )
}

AdminInitdb.propTypes = {
  initDb: PropTypes.func.isRequired
}

export default AdminInitdb

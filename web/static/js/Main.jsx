import React from 'react'
import ReactDOM from 'react-dom'
import {AppRouter} from 'web/static/js/paths'

const Main =
  document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<AppRouter />
    , document.querySelector('#App'))
  })

export default Main;

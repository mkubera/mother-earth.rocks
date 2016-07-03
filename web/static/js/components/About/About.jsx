import React from 'react'
import ReactMarkdown from 'react-markdown'
import Contact from './Contact'
import Donate from './Donate'
import AboutMd from './AboutMd'

const About = (props) => {
  return (
    <div className="content-about">
      <h1>
        <span className="octicon octicon-question"></span>
        About
      </h1>
      <ReactMarkdown source={AboutMd} />
      <br />
      <Donate />
      <Contact />
    </div>
  )
}

export default About

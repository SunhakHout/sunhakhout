import React, { Component, Fragment } from 'react'
import { Contact, Profile, Quote } from './components'

export default class LeftAside extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <aside className="aside-left">
        <div className="card text-center">
          <Profile size="md"/>
          <Quote /> <br/>
          <button className="btn btn-info"> HIRE ME </button> <br></br>
          <Contact />
        </div>
      </aside>
    )
  }
}

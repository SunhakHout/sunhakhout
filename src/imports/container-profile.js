import React, { Component, Fragment } from 'react'
import { Profile } from './components'

export default class ContainerProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="">
        <div className="container-profile">
          <div className="landing-bg-color"></div>
          <div className="landing-bg-img"></div>
          <Profile size="lg"/>
        </div>
      </div>
    )
  }
}

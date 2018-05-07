import React, { Fragment } from 'react'
import profilePicture from '../images/profile-picture.jpg'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <figure className="text-center">
        <img className={`rounded-profile ${this.props.size}`} src={profilePicture} alt="Profile Picture"/>
        <figcaption className="mt-10">
          <div className="font-16"><b>HOUT SUNHAK</b></div>
          <div>Web Designer & Developer</div>
        </figcaption>
      </figure>
    )
  }
}

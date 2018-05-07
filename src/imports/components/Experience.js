import React from 'react'

export default class Experience extends React.Component {
  constructor(props) {
    super(props)
    this.tasks = this.props.tasks
  }

  renderTasks() {
    let tasks = this.tasks
    return tasks.map(task => {
      return <li>{task}</li>
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="header">Experiences of <span className="name">{this.props.name}</span></h1>
        <ul>
          { () => this.renderTasks() }
        </ul>
      </React.Fragment>
    )
  }
}

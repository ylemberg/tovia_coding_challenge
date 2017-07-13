import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dummyStateVar: 'Inside App'
    }
  }
  render() {
    console.log('hai')
    return (
      <div>{this.state.dummyStateVar}</div>
    )
  }
}

import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      formHeader: 'Tovia\'s Enigma'
    }
  }
  render() {
    return (
      <div className="toviaForm">
        <h3> {this.state.formHeader} </h3>
      </div>
    )
  }
}

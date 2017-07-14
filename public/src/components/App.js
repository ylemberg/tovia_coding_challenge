import React, { Component } from 'react'

import FormInput from './FormInput'
import { toviaForm } from '../styling'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      formHeader: 'Tovia\'s Enigma'
    }
  }
  render() {
    return (
      <div style={toviaForm}>
        <h3> {this.state.formHeader} </h3>
        <FormInput />
      </div>
    )
  }
}

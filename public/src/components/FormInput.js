import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input'
import Avatar from 'react-toolbox/lib/avatar';

import { avatar } from '../styling'

export default class FormInput extends Component {
  constructor() {
    super()
    this.state = {
      text: 'FormInput'
    }
  }

  handleChange(evt) {
    console.log('evt', evt)
  }

  render() {
    return (
      <div>
        <div style={avatar}>S</div>
        <Input style={{display: 'inline'}}type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
      </div>
    )
  }
}
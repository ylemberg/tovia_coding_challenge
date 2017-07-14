import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input'
import Avatar from 'react-toolbox/lib/avatar';

import { avatar, nameLabel } from '../styling'

export default class FormInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange(name, value) {
    this.setState({...this.state, [name]: value})
  }

  render() {
    return (
      <div>
        <div style={avatar}>S</div>
        <div style={nameLabel}>
          <Input  type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
        </div>
      </div>
    )
  }
}
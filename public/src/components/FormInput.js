import React, { Component } from 'react'

import Input from 'react-toolbox/lib/input'
import Avatar from 'react-toolbox/lib/avatar';
import DatePicker from 'react-toolbox/lib/date_picker';

import { avatar, nameLabel } from '../styling'

export default class FormInput extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      message: '',
      date: ''
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
          <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
        </div>
        <Input required type='text' label='Message' name='message' value={this.state.message} onChange={this.handleChange.bind(this, 'message')} maxLength={120}/>
        <DatePicker label='Expiration Date' sundayFirstDayOfWeek onChange={this.handleChange.bind(this, 'date')} value={this.state.date} />
      </div>
    )
  }
}
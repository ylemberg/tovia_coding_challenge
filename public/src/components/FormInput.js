import React, { Component } from 'react'
import axios from 'axios'

import Input from 'react-toolbox/lib/input'
import Avatar from 'react-toolbox/lib/avatar'
import DatePicker from 'react-toolbox/lib/date_picker'
import { Button } from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'

import { avatar, nameLabel, wideInput, formBtns, dialogBtns, passphrase, passphraseVal, generatePassphrase } from '../styling'

export default class FormInput extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      message: '',
      date: '',
      firstInitial: '',
      decryptedMsg: 'dsjkfs23r3hrhro3festrif3odfewffdslkjflkd2343l2k4jlj324lkj23lk4j23kl4jkl32j4lk23j4lk3j4lklggfdsjkfs23r3hrhro3festrif3odfewfdsjkfs23r3hrhro3festrif3odfewffdslkjflkd2343l2k4jlj324lkj23lk4j23kl4jkl32j4lk23j4lk3j4lklggfdsjkfs23r3hrhro3festrif3odfewf',
      displayDialog: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.encryptFormData = this.encryptFormData.bind(this)
  }

  handleChange(name, value) {
    if (name === 'name') {
      let firstLetter = value[0]
      firstLetter = firstLetter ? firstLetter.toUpperCase() : ''

      this.setState({
        ...this.state,
        firstInitial: firstLetter,
        [name]: value
      })
    } else {
      this.setState({
        ...this.state,
        [name]: value
      })
    }
  }

  handleToggle = () => {
    if (!this.state.displayDialog) {
      this.encryptFormData()
    } else {
      this.setState({displayDialog: !this.state.displayDialog})
    }
  }

  encryptFormData () {
    const validForm = this.state.name.length && this.state.message.length && this.state.date !== '' && this.props.passphrase.length

    if (validForm) {
      axios.post('/encrypt', {
        message: this.state.message,
        name: this.state.name,
        date: this.state.date,
        passphrase: this.props.passphrase
      }).then(res => {
        this.setState({displayDialog: !this.state.displayDialog})
      }).catch(err => {
        console.log('Error encrypting message', err)
      })
    }
  }

  render() {
    return (
      <div>
        <div style={avatar}>{this.state.firstInitial}</div>
        <div style={nameLabel}>
          <Input type='text' label='Name' name='name' value={this.state.name} onChange={val => this.handleChange('name', val)} />
        </div>
        <div style={wideInput}>
          <Input
            required
            type='text'
            label='Message'
            name='message'
            value={this.state.message}
            onChange={val => this.handleChange('message', val)}
            maxLength={120}
            multiline={true}
          />
        </div>
        <div style={wideInput}>
          <DatePicker
          style={wideInput}
          label='Expiration Date'
          sundayFirstDayOfWeek
          onChange={val => this.handleChange('date', val)}
          value={this.state.date}
        />
        </div>
         <div>
          <Button
            style={formBtns}
            label='ENCRYPT'
            flat
            onClick={this.handleToggle}
          />
          <Button
            style={formBtns}
            label='DECRYPT'
            flat
          />
        </div>
        <Dialog
          actions={this.actions}
          active={this.state.displayDialog}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='De/Encrypt'
        >
          <Input
            required
            type='text'
            label='Message'
            name='message'
            value={this.state.decryptedMsg}
            multiline={true}
          />
          <div style={dialogBtns}>
            <Button
              style={formBtns}
              label='CLOSE'
              flat
              onClick={this.handleToggle}
            />
            <Button
              style={formBtns}
              label='ENCRYPT'
              flat
            />
          </div>
        </Dialog>
      </div>
    )
  }
}
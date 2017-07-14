import React, { Component } from 'react'
import axios from 'axios'

import Input from 'react-toolbox/lib/input'
import Avatar from 'react-toolbox/lib/avatar'
import DatePicker from 'react-toolbox/lib/date_picker'
import { Button } from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'

import { avatar, nameLabel, wideInput, formBtns, dialogBtns, passphrase, passphraseVal, generatePassphrase, formBtnsContainer } from '../styling'

export default class FormInput extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      message: '',
      date: '',
      firstInitial: '',
      encryptedMsg: '',
      displayDialog: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.encryptFormData = this.encryptFormData.bind(this)
    this.handleToggleEncrypt = this.handleToggleEncrypt.bind(this)
    this.handleToggleDecrypt = this.handleToggleDecrypt.bind(this)
    this.handleHashValueChange = this.handleHashValueChange.bind(this)
  }

  componentDidMount() {
    document.addEventListener('copy', e => {
      if (this.state.displayDialog) {
        e.clipboardData.setData('text/plain', this.state.encryptedMsg)
      } else {
        e.clipboardData.setData('text/plain', this.props.passphrase)
      }
      e.preventDefault()
    })
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

  handleToggleEncrypt() {
    if (!this.state.displayDialog) {
      this.encryptFormData()
    } else {
      this.setState({displayDialog: !this.state.displayDialog})
    }
  }

  handleToggleDecrypt() {
    if (this.state.encryptedMsg.length) {
      axios.get(`/decrypt?hash=${this.state.encryptedMsg}&passphrase=${this.props.passphrase}`)
        .then(({ data }) => {
          this.setState({
            ...this.state,
            name: data.name,
            date: new Date(data.expiration),
            message: data.message,
            displayDialog: !this.state.displayDialog
          })
        }).catch(err => {
          console.log('err decrypting hash', err)
        })
    }
  }

  handleToggle() {
    this.setState({displayDialog: !this.state.displayDialog})
  }

  handleHashValueChange(val) {
    thi
  }

  encryptFormData () {
    const validForm = this.state.name.length && this.state.message.length && this.state.date !== '' && this.props.passphrase.length

    if (validForm) {
      axios.post('/encrypt', {
        message: this.state.message,
        name: this.state.name,
        expiration: this.state.date.toDateString(),
        passphrase: this.props.passphrase
      }).then(res => {
        this.setState({
          ...this.state,
          displayDialog: !this.state.displayDialog,
          encryptedMsg: res.data
        })
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
         <div style={formBtnsContainer}>
          <Button
            style={formBtns}
            label='ENCRYPT'
            flat
            onClick={this.handleToggleEncrypt}
          />
          <Button
            style={formBtns}
            label='DECRYPT'
            flat
            onClick={this.handleToggle}
          />
        </div>
        <Dialog
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
            value={this.state.encryptedMsg}
            onChange={val => this.handleChange('encryptedMsg', val)}
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
              label='DECRYPT'
              flat
              onClick={this.handleToggleDecrypt}
            />
          </div>
        </Dialog>
      </div>
    )
  }
}

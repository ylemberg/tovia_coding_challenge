import React, { Component } from 'react'

import FormInput from './FormInput'
import { cursorPointer, passphrase, passphraseRow, toviaForm, formHeader } from '../styling'

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      formHeader: 'Tovia\'s Enigma',
      passphrase: '',
      passphrasePossibleChars: props.passphraseCharCodes
    }

    this.changePassphrase = this.changePassphrase.bind(this)
    this.generatePassphrase = this.generatePassphrase.bind(this)
    this.rerenderPassphrase = this.rerenderPassphrase.bind(this)
  }

  componentDidMount() {
    const url = document.URL

    if (url.lastIndexOf('#') !== -1) {
      const startOfPassphrase = url.lastIndexOf('#') + 1
      this.setState({
        ...this.state,
        passphrase: url.substr(startOfPassphrase)
      })
    } else {
      this.setState({
        ...this.state,
        passphrase: this.generatePassphrase()
      })
    }
  }

  generatePassphrase () {
    let newPassphrase = ''
    const possibleChars = this.state.passphrasePossibleChars

    for (let i = 0; i < 5; i++) {
      const randomIdx = Math.floor(Math.random() * possibleChars.length)
      const charCode = possibleChars[randomIdx]
      const char = String.fromCharCode(charCode)
      newPassphrase += char
    }

    return newPassphrase
  }

  rerenderPassphrase(phrase) {
    this.setState({
      ...this.state,
      passphrase: phrase
    })
  }

  changePassphrase () {
    const phrase = this.generatePassphrase()
    this.rerenderPassphrase(phrase)
    window.location = `${process.env.DOMAIN}/#${phrase}`
  }

  render() {
    return (
      <div>
        <div style={toviaForm}>
          <h3 style={formHeader}> {this.state.formHeader} </h3>
          <FormInput passphrase={this.state.passphrase}/>
        </div>
        <div style={passphrase}>
          <div style={passphraseRow}>
            Your new passphrase - <a style={cursorPointer}>{this.state.passphrase}</a>
          </div>
          <div style={passphraseRow}>
            <a style={cursorPointer} onClick={this.changePassphrase}>Generate new Passphrase</a>
          </div>
        </div>
      </div>
    )
  }
}

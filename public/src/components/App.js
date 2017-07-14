import React, { Component } from 'react'

import Tooltip from 'react-toolbox/lib/tooltip';
import Link from 'react-toolbox/lib/link';
import FormInput from './FormInput'

const TooltipLink = Tooltip(Link);

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
    this.copyToClipboard = this.copyToClipboard.bind(this)
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

  generatePassphrase() {
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

  changePassphrase() {
    const phrase = this.generatePassphrase()
    this.rerenderPassphrase(phrase)
    window.location = `${process.env.DOMAIN}/#${phrase}`
  }

  copyToClipboard() {
    try {
      document.execCommand('copy')
    } catch (e) {
      console.log('Oops, unable to copy', e)
    }
  }

  render() {
    return (
      <div>
        <div className="tovia-form">
          <h2 className="form-header"> {this.state.formHeader} </h2>
          <FormInput passphrase={this.state.passphrase}/>
        </div>
        <div className="passphrase">
          <div className="passphrase-row">
            Your new passphrase -&nbsp;
            <TooltipLink
              className="passphrase"
              href={`#${this.state.passphrase}`}
              tooltip="Click to copy to clipboard"
              tooltipPosition="top"
              onClick={this.copyToClipboard}
            >
              {this.state.passphrase}
            </TooltipLink>
          </div>
          <div className="passphrase-row">
            <a className="cursor-pointer" onClick={this.changePassphrase}>Generate new Passphrase</a>
          </div>
        </div>
      </div>
    )
  }
}

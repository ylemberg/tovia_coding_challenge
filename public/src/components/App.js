import React, { Component } from 'react'

import Tooltip from 'react-toolbox/lib/tooltip';
import Link from 'react-toolbox/lib/link';
import FormInput from './FormInput'
import { cursorPointer, passphrase, passphraseRow, toviaForm, formHeader, passphraseLink } from '../styling'

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

    document.addEventListener('copy', e => {
      e.clipboardData.setData('text/plain', this.state.passphrase)
      e.preventDefault()
    });
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

  copyToClipboard () {
    try {
      document.execCommand('copy')
    } catch (e) {
      console.log('Oops, unable to copy', e)
    }
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
            Your new passphrase - <TooltipLink
                                    className="passphrase"
                                    style={passphraseLink}
                                    href={`#${this.state.passphrase}`}
                                    tooltip="Click to copy to clipboard"
                                    onClick={this.copyToClipboard}
                                  >
                                    {this.state.passphrase}
                                  </TooltipLink>
          </div>
          <div style={passphraseRow}>
            <a style={cursorPointer} onClick={this.changePassphrase}>Generate new Passphrase</a>
          </div>
        </div>
      </div>
    )
  }
}

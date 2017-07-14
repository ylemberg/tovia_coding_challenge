import React, { Component } from 'react'

import FormInput from './FormInput'
import { cursorPointer, passphrase, passphraseRow, toviaForm } from '../styling'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      formHeader: 'Tovia\'s Enigma'
    }
  }

  render() {
    return (
      <div>
        <div style={toviaForm}>
          <h3> {this.state.formHeader} </h3>
          <FormInput />
        </div>
        <div style={passphrase}>
          <div style={passphraseRow}>
            Your new passphrase - <a style={cursorPointer}>vd3kfX</a>
          </div>
          <div style={passphraseRow}>
            <a style={cursorPointer}>Generate new Passphrase</a>
          </div>
        </div>
      </div>
    )
  }
}

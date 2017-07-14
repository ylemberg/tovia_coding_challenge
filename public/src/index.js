import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { possiblePassphraseChars } from './utils'
import { fitToParentHeight } from './styling'

ReactDOM.render(
  <App className="fit-to-parent-height" passphraseCharCodes={possiblePassphraseChars()}/>,
  document.getElementById('root')
)

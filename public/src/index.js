import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { possiblePassphraseChars } from './utils'
import { fitToParentHeight } from './styling'

ReactDOM.render(
  <App style={fitToParentHeight} passphraseCharCodes={possiblePassphraseChars()}/>,
  document.getElementById('root')
)

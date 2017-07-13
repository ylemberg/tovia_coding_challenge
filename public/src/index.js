import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { fitToParentHeight } from './styling'

ReactDOM.render(
  <App style={fitToParentHeight} />,
  document.getElementById('root')
)

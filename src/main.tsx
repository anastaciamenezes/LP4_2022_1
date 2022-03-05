import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import FontStyles from './assets/fonts/fonts'


ReactDOM.render(
  <React.StrictMode>
    // Aplicação deve ser routeada
    <BrowserRouter>
      <FontStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

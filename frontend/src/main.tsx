import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/**Essa linha de codigo é para corrigir um problema de envio de sms que estava dando ao fazer
 * o deploy da aplicacao frontend no Netlify
 */
window.React = React

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

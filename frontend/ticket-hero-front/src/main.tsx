import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
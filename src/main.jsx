// Importar todo lo del react
import { StrictMode } from 'react'
// Importación del DOM
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Usado pa posibles errores y doble renderizado
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById('root')
// )

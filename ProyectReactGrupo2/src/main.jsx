import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import InputAnswer from './Components/InputAnswer.jsx'

createRoot(document.getElementById('root')).render(
  //        <InputAnswer />
  <StrictMode>
    <App />

  </StrictMode>,
)

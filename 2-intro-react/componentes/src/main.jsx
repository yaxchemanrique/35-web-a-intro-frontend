import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* 
// Scaffold:
> main.js
> App.jsx
! > src
    >components
      > Saludo.jsx

> main.js
> App.jsx
> components
  > Saludo.jsx
*/
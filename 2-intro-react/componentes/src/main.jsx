import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'  
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
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
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { NavbarProvider } from './GlobalContext/navbarContext.jsx'
import { CartListContextProvider } from './GlobalContext/CartListContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarProvider>
      <CartListContextProvider>
        <App />
      </CartListContextProvider>
    </NavbarProvider>
  </StrictMode>,
)

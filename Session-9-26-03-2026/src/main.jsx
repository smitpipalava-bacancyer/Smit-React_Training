import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavbarProvider } from './GlobalContext/navbarContext.jsx'
import App from './App.jsx'

import { Provider } from "react-redux";
import store from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarProvider>
      <Provider store = {store}>
        <App />
      </Provider>
    </NavbarProvider>
  </StrictMode>,
)

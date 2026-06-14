import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/lib/flaticon/font/flaticon.css';
import '../public/css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <App />
     </BrowserRouter>
    
  </StrictMode>,
)

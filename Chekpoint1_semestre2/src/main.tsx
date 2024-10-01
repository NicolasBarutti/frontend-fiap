import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GlobalStyled from './global-styled.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyled/>
  </StrictMode>,
)

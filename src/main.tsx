import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from './ui/Toast/Toast.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Toaster />
  </>
)

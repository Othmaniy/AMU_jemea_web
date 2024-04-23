import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AuthcontextProvider } from './components/Context/Authcontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthcontextProvider >
    <App />
    </AuthcontextProvider>
    
  </React.StrictMode>,
)

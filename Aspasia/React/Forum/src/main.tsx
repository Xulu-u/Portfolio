import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ForumUserProvider from './app/providers/ForumUserProvider.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ForumUserProvider>
      <App />
    </ForumUserProvider>
  </React.StrictMode>,
)

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './utils/context/AuthContext'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

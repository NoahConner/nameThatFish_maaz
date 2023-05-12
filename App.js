
import React from 'react'
import { AuthContext } from './src/context'
import AppContainer from './src/navigation'

const App = () => {
  return (
    <AuthContext.AuthProvider>
    <AppContainer />
  </AuthContext.AuthProvider>
  )
}

export default App
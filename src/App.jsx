import React, { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Profile from './components/profile/Profile'

function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Profile/>
    </div>
  )
}

export default App

import React from 'react'
import Sidebar from './components/wrapper/Sidebar.jsx'
import PageContent from './components/wrapper/PageContent.jsx'

function App() {
  return (
    <div id="wrapper" className="toggled">
      <Sidebar />
      <PageContent />
    </div>
  )
}

export default App

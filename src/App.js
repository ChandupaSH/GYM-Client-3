import React from 'react'
import {  HashRouter as Router, Route, Routes ,BrowserRouter} from 'react-router-dom'
import HomePage from './scenes/HomePage.jsx'
import UserPage from './scenes/UserPage.jsx'
import QrPage from './scenes/QrPage.jsx'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element = { <HomePage/>} />
          <Route path='/user' element = { <UserPage/>} />
          <Route path='/qr' element = { <QrPage/>} />
        </Routes>
      </Router>      
    </div>
  )
}

export default App

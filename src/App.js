import React from 'react'
import {  HashRouter as Router, Route, Routes ,BrowserRouter} from 'react-router-dom'
import HomePage from './scenes/HomePage'
import UserPage from './scenes/UserPage'
import QrPage from './scenes/QrPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <HomePage/>} />
          <Route path='/user' element = { <UserPage/>} />
          <Route path='/qr' element = { <QrPage/>} />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App

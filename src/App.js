import React from 'react'
import {Route, Routes} from "react-router-dom"
import Dashboard from './Dashboard'
import Login from './Login'
import Signup from './Signup'
import "./Css/app.css"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App
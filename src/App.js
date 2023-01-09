import React from 'react'
import {Route, Routes} from "react-router-dom"
import Dashboard from './Dashboard'
import Login from './Login'
import Signup from './Signup'
import "./Css/app.css"
import AddEmployee from './AddEmployee'
import ViewEmployees from './ViewEmployees'
import LeaveApplications from './LeaveApplications'
import Profile from './Profile'
import MyLeaveApplication from './MyLeaveApplication'
import ApplyLeave from './ApplyLeave'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/addEmployee' element={<AddEmployee />}/>
        <Route path='/viewEmployees' element={<ViewEmployees />}/>
        <Route path='/leaveAllpications' element={<LeaveApplications />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/MyLeaveApplication' element={<MyLeaveApplication />}/>
        <Route path='/ApplyLeave' element={<ApplyLeave />}/>
      </Routes>
    </div>
  )
}

export default App
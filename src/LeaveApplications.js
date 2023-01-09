import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Components/Header'

const LeaveApplications = () => {

    const navigate = useNavigate()

  return (
    <div className="dashboardMainBox">
    <Header />
    <div className="dashboardSecondBox">
      <div className="sidebarMainBox">
        <h1
          className="components"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee
        </h1>
        <h1
          className="components"
          onClick={() => navigate("/viewEmployees")}
        >
          view Employees
        </h1>
        <h1
          className="components"
          onClick={() => navigate("/leaveAllpications")}
        >
          Leave Applications
        </h1>
      </div>
    </div>
  </div>
  )
}

export default LeaveApplications
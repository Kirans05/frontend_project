import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Components/Header'

const Profile = () => {
    const navigate = useNavigate()

    const [role, setRole] = useState("employee")  
    const [userData, setUserData] = useState("")


useEffect(() => {
  let data = JSON.parse(localStorage.getItem("userInfo"))
  if(data.role == "Admin"){
    setRole("Admin")
  }
  setUserData(data)
},[])
  return (
    <div className="dashboardMainBox">
      <Header />
      <div className="dashboardSecondBox">

    {
      role == "employee" ?
      <div className="sidebarMainBox">
      <h1 className="components" onClick={() => navigate("/Profile")}>Profile</h1>
      <h1 className="components" onClick={() => navigate("/MyLeaveApplication")}>My Leave Applications</h1>
      <h1 className="components" onClick={() => navigate("/ApplyLeave")}>Apply Leave</h1>
    </div>
    : <div className="sidebarMainBox">
    <h1 className="components" onClick={() => navigate("/addEmployee")}>Add Employee</h1>
    <h1 className="components" onClick={() => navigate("/viewEmployees")}>view Employees</h1>
    <h1 className="components" onClick={() => navigate("/leaveAllpications")}>Leave Applications</h1>
  </div>
    }

    <div>   
        <h1>Name - {userData.name}</h1>
        <h1>Email Id - {userData.email_id}</h1>
        <h1>Department - {userData.department}</h1>
        <h1>Phone Number - {userData.phone_number}</h1>
    </div>

</div>
</div>
  )
}

export default Profile
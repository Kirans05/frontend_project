import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import "./Css/Dashboard.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate()
  const [role, setRole] = useState("employee")  
  const [name, setName] = useState("")


useEffect(() => {
  let data = JSON.parse(localStorage.getItem("userInfo"))
  if(data.role == "Admin"){
    setRole("Admin")
  }
  setName(data.name)
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


        {/* for admin */}
        

        {/* for employee */}
       
        <div className="dashboardBox">
          <h1>Welcome {name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

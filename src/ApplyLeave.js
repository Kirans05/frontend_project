import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import "./Css/ApplyLeave.css"

const ApplyLeave = () => {

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
        {role == "employee" ? (
          <div className="sidebarMainBox">
            <h1 className="components" onClick={() => navigate("/Profile")}>
              Profile
            </h1>
            <h1
              className="components"
              onClick={() => navigate("/MyLeaveApplication")}
            >
              My Leave Applications
            </h1>
            <h1
              className="components"
              onClick={() => navigate("/ApplyLeave")}
            >
              Apply Leave
            </h1>
          </div>
        ) : (
          <div className="sidebarMainBox">
            <h1 className="components" onClick={() => navigate("/addEmployee")}>
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
        )}
        <div className="leavePageMianBox">
            <input type={"text"} placeholder={"Enter reason For Leave"} />
            <input type={"date"} placeholder={"Enter reason For Leave"} />
            <input type={"text"} placeholder={"Enter No of Days"} />
            <input type={"text"} placeholder={"Enter Department"} />
            <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;

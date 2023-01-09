import React, { useState } from "react";
import Header from "./Components/Header";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./Css/AddEmployee.css"


const AddEmployee = () => {

    const navigate = useNavigate()
  const [optionSelected, setOptionSelected] = useState("")
  const [name, setname] = useState("")
  const [password, setPassword] = useState("")
  const [emailId, setEmailId] = useState("")
  const [department, setDepartment] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [editEmployee, setEditEmployee] = useState(false)
  


  const createNewEmployee = async () => {
    try{
      let response = await axios("http://localhost:4000/register",{
        method:"POST",
        data:{
          name,
          emailId,
          password,
          department,
          phoneNumber
        },
        headers:{
          "content-type":"application/json"
        }
      })


      console.log(response.data)
    }catch(err){

    }
  }


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
            // onClick={() => setOptionSelected("leave application")}
            onClick={() => navigate("/leaveAllpications")}
          >
            Leave Applications
          </h1>
        </div>
        <div className="AddEmployee">
            <h1 className="title">Fill Below Details To Create New Employee</h1>
            <input type={"text"} placeholder="Enter Employee Name" className="inputTag" value={name} onChange={(e) => setname(e.target.value)}/> 
            <input type={"text"} placeholder="Enter Employee Email Id" className="inputTag" value={emailId} onChange={(e) => setEmailId(e.target.value)}/>
            <input type={"text"} placeholder="Enter Employee Password" className="inputTag" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type={"text"} placeholder="Enter Employee Department" className="inputTag" value={department} onChange={(e) => setDepartment(e.target.value)}/>
            <input type={"text"} placeholder="Enter Employee Phone Number" className="inputTag" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <button className="createButton" onClick={createNewEmployee}>Create</button>
            {/* <button className="createButton" onClick={viewAllEmployees}>View Emploees</button> */}
          </div>
      </div>
    </div>
  );
};

export default AddEmployee;

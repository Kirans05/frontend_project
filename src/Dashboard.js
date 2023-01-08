import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import "./Css/Dashboard.css";

const Dashboard = () => {

  const [optionSelected, setOptionSelected] = useState("")

  return (
    <div className="dashboardMainBox">
      <Header />
      <div className="dashboardSecondBox">
        <div className="sidebarMainBox">
          <h1 className="components" onClick={() => setOptionSelected("add employee")}>Add Employee</h1>
          <h1 className="components" onClick={() => setOptionSelected("view employee")}>view Employees</h1>
          <h1 className="components" onClick={() => setOptionSelected("leave application")}>Leave Applications</h1>
        </div>
        <div className="dashboardBox">
          {/* <h1>Welcome Admin</h1> */}
          <div className="AddEmployee">
            <h1 className="title">Fill Below Details To Create New Employee</h1>
            <input type={"text"} placeholder="Enter Employee Name" className="inputTag"/>
            <input type={"text"} placeholder="Enter Employee Email Id" className="inputTag"/>
            <input type={"text"} placeholder="Enter Employee Password" className="inputTag"/>
            <input type={"text"} placeholder="Enter Employee Department" className="inputTag"/>
            <input type={"text"} placeholder="Enter Employee Phone Number" className="inputTag"/>
            <button className="createButton">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

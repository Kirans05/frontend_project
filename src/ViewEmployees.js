import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Components/Header'
import axios from "axios"
import "./Css/ViewEmployee.css"

const ViewEmployees = () => {

    const navigate = useNavigate()
    const [allEmployeeList, setAllEmployeeList] = useState([])


    const viewAllEmployees = async () => {
        let response = await axios("http://localhost:4000/allEmployee",{
          method:"GET",
          headers:{
            "content-type":"application/json"
          }
        })  
        
        console.log(response)
        if(response.status == 200){
          setAllEmployeeList(response.data)
        }
      }


      useEffect(() => {
        viewAllEmployees()
      },[])

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
      <div className='viewDetailsMainBox'>
        {
            allEmployeeList.length == 0 ? <h1>No Data Found</h1>
            : <table className='table'>
            <thead>
                <tr>
                    <th>Id No</th>
                    <th>Name</th>
                    <th>EmailId</th>
                    <th>Department</th>
                    <th>Phone Number</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                    allEmployeeList.map((item, index) => {
                        if(item.role == "Admin"){
                          return
                        }else{
                      return <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email_id}</td>
                          <td>{item.department}</td>
                          <td>{item.phone_number}</td>
                          <td className='actionButton'>edit</td>
                          <td className='actionButton'>delete</td>
                      </tr>
                        }
                    })
                  }
            </tbody>
        </table>
        }
        
          </div>
    </div>
  </div>
  )
}

export default ViewEmployees
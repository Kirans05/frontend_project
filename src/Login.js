import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Css/Login.css"

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = async () => {
    let response = await axios("http://localhost:4000/login",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      data:{
        email,
        password
      }
    })

    if(response.status == 200){
      localStorage.setItem('userInfo',JSON.stringify(response.data[0]))
      navigate("/dashboard")
    }

    // console.log(response)
  }

  return (
        <div className='LoginBox'>
            <input type={"text"} placeholder="Enter Email Id" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type={"password"} placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/ >
            <button onClick={loginHandler}>Login</button>
        </div>
  )
}

export default Login
import React from 'react'
import "./Css/Signup.css"

const Login = () => {
  return (
        <div className='SignupBox'>
            <input type={"text"} placeholder="Enter Name" />
            <input type={"text"} placeholder="Enter Email Id" />
            <input type={"password"} placeholder="Enter Password" />
            <input type={"button"} value={"Register"} />
        </div>
  )
}

export default Login
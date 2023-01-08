import React from 'react'
import "./Css/Login.css"

const Login = () => {
  return (
        <div className='LoginBox'>
            <input type={"text"} placeholder="Enter Email Id" />
            <input type={"password"} placeholder="Enter Password" />
            <input type={"button"} value={"Login"} />
        </div>
  )
}

export default Login
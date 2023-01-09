import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Css/Header.css"

const Header = () => {

  const navigate = useNavigate()


  const logoutHandler = () => {
    localStorage.removeItem("userInfo")
    navigate("/Login")
  }

  return (
    <div className='headermainBox'>
        <h1>Welcome Admin</h1>
        <button className='logoutBtn' onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Header
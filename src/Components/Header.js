import React from 'react'
import "../Css/Header.css"

const Header = () => {
  return (
    <div className='headermainBox'>
        <h1>Welcome Admin</h1>
        <button className='logoutBtn'>Logout</button>
    </div>
  )
}

export default Header
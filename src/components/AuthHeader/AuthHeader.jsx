import React from 'react'
import "./AuthHeader.css"
import LOGO from "../../assets/Images/Logo.png"

const AuthHeader = () => {
  return (
    <div className='AuthHeader'>
    <div className='Header-grp'>
          <img className='header-logo' src={LOGO} alt="AppLOGO" />
          <h1 className='header-AppName'>Hubly</h1>
    </div>
    </div>
  )
}

export default AuthHeader
import React, { useState } from 'react'
import AuthIMG from "../../assets/Images/Auth_RSideImg.png"
import "./login.css"
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: "",
      password: ""
    })
  
    const handleLogin = async () => {
      const { email, password } = formData;
  
      if (!email || !password) {
        return toast.error("Credentials are required!");
      }

      try {

      const response = await fetch(`${import.meta.env.VITE_SERVER_API}/api/auth/signin`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something Went Wrong")
      }
  
      const data = await response.json();
      if (data.token) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate('/dashboard');
      }
      else {
        console.log("else")
        toast.error(data.message);
      }

    } 
    catch(error){
      console.log("catch")
      toast.error(error.message || "An unexpected error occurred.");
    }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin();
    }
  
    return (
      <div className="Auth-Container">
  
        <div className="Auth-left">

          <AuthHeader/>
  
          <div className='Signin-section'>
          <h1 className='heading'>Sign in to your Hubly</h1>
  
            <div className='input-box'>
              <input
                type="text"
                id="email"
                name="email"
                className='signin-input noborder'
                placeholder='email'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
  
              <input
                type="password"
                id="password"
                name="password"
                placeholder='Password'
                className='signin-input noborder'
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
  
            </div>
  
            <button className='btn-login' type='submit' onClick={handleSubmit} >
              Log in
            </button>
  
            <p className='signup-link'>
              Don't have an account? <span className='underline' onClick={() => navigate('/signup')} >Sign up</span>
            </p>
  
          </div>
  
          <p className='Login-TnC-description'>This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy </span> and <span className='underline'> Terms of Service </span> apply.</p>
        </div>
  
        <img className='AuthIMG' src={AuthIMG} alt="" />
      </div>
  )
}

export default Login
import React, { useState } from 'react'
import AuthIMG from "../../assets/Images/Auth_RSideImg.png"
import "./Signup.css"
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    terms: false
  })

  const validateForm = () => {

    const { firstName, lastName, email, password, confirm_password } = formData;

    if (firstName.trim().length === 0) {
      toast.error("First name is required*");
      return false;
    }

    if (lastName.trim().length === 0) {
      toast.error("Last name is required*");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required*");
      return false;
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      toast.error("Invalid Email*");
      return false;
    }

    if (!formData.password) {
      toast.error("Please enter your password*");
      return false;
    } else if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters*");
      return false;
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      toast.error("At least 1 lowercase letter required*")
      return false;
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      toast.error("At least 1 uppercase letter required*");
      return false;
    } else if (!/(?=.*\d)/.test(formData.password)) {
      toast.error("At least 1 number required*");
      return false;
    } else if (!/(?=.*[@#$%^&*!])/.test(formData.password)) {
      toast.error("At least 1 special character (@#$%^&*!)*");
      return false;
    }

    if (!formData.confirm_password) {
      toast.error("Confirm password is required*");
      return false;
    } else if (formData.password !== formData.confirm_password) {
      toast.error("The Password you entered does not match*");
      return false;
    }

    if (!formData.terms) {
      toast.error("You must agree to the terms*");
      return false;
    }

    return true;

  }

  const handleSignup = async () => {
    try {
      const { firstName, lastName, email, password } = formData;
      const response = await fetch(`${import.meta.env.VITE_SERVER_API}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch data from the server")
      }

      const data = await response.json();
      if (data.token) {
        toast.success(data.message)
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        console.log("error", data.message);
        toast.error(data.message)
      }

    }
    catch (error) {
      toast.error(error.message || "An unexpected error occurred.");
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleSignup();
    }

  }

  return (
    <div className='Signup-container'>
      <div className='signup-left-container'>

        <AuthHeader />

        <div className='Signup-section'>

          <div className='Signup-form'>

            <form className='form' onSubmit={handleSubmit}>

              <div className='Signup-form-title'>

                <h3>Create an account</h3>
                <p onClick={() => navigate('/signin')}> Sign in instead</p>

              </div>

              <div className='Signup-credentials-box'>

                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className='signup-input'
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />

                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className='signup-input'
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className='signup-input'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className='signup-input'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm_password"
                  className='signup-input'
                  value={formData.confirm_password}
                  onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                  required
                />

              </div>

              <div className='Signup-checkbox-div'>
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className='signup-input-checkbox'
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                />
                <label className='checkBox_label' htmlFor="terms">
                  By creating an account, I agree to our <span className='underline'>Terms of use</span>  and <span className='underline'>Privacy Policy</span>
                </label>

              </div>

              <button className='btn-createAcc' type='submit'>
                Create an account
              </button>

            </form>

          </div>

        </div>

        <p className='TnC-description'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> Terms of Service apply.</p>




      </div>

      <img className='AuthIMG' src={AuthIMG} alt="" />
    </div>
  )
}

export default Signup
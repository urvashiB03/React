import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-field">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className='login-signup-login'>Already have an account? <span>Login here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" id="agree" name="agree"  />
          <p>I agree to the Terms and Conditions</p> 
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup

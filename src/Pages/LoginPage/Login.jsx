import React from 'react';
import "../LoginPage/Login.css"

function Login() {
  return (
    
    <>
    <div className="login">
      <h4> Login Here! </h4>

  <form className="form">
    <div className="email">                   
    <label htmlFor="email">Username/Email</label>
    <input type="text" placeholder="Enter your username/email"/>
</div>

<div className="password">
    <label htmlFor="password">Password</label>
    <input type="password"  placeholder='*********'/>
</div>

<div className="forget">
     
      <label className='rememberMe'  htmlFor="checkbox"> <input type="checkbox" />Remember me</label> 
      <p>Forgot Password</p>
</div>
      <button className="loginBtn" type="button"> Log In</button>
  </form>
    </div>
    </>
  )
}

export default Login
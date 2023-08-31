import React from 'react';
import "../RegisterPage/Register.css"

function Register() {
  return (
    <div className="register">
  <div className="registerNote">
    <h2>Register User</h2>
    <div className="noteCard">
      <h3>Note:</h3>
      <p><div className='circle'></div>Only admin users can create accounts.</p>
      <p><div className='circle circle2'> </div>Admin users can create accounts for POD, Physician, Lab, Pharmacist.</p>
      <p><div className='circle'>  </div>Contact Admin user if you need a new account.</p>
    </div>
  </div>
  
  <div className="registerForm">
    <h3>Registration Details</h3>
    <div className="reg-form">
    <div className="firstname">
      <label name="firstname">Firstname</label>
      <input type="text"/>
  </div>
    <div className="lastname">
      <label name="lastname">Lastname</label>
      <input type="text"/>
  </div>
    <div className="reg-email">
      <label name="email">Email</label>
      <input type="email"/>
  </div>
    <div className="phoneNumber">
      <label name="phoneNumber">Phone Number</label>
      <input type="text"/>
  </div>
    <div className="staffID">
      <label name="staffID">Staff ID</label>
      <input type="text"/>
  </div>
  </div>
<div className="accountType">
  <h3>Account Type</h3>
  <div className="checkboxes">
  <div className="OPD">
      <input type="checkbox" value="1"/>
      <label name="OPD">OPD</label>
  </div>
  <div className="physician">
      <input type="checkbox" value="1"/>
      <label name="physician">Physician</label>
  </div>
  <div className="pharmacy">
      <input type="checkbox"value="1"/>
      <label name="pharmacy">Pharmacy</label>
  </div>
  <div className="lab">
      <input type="checkbox" value="1"/>
      <label name="lab">Lab</label>
  </div>
  <div className="others">
      <input type="checkbox" value="1"/>
      <label name="others">Others</label>
  </div>
  </div>
</div>
<button type='button'>Create Account</button>
  </div>
    </div>
  )
}

export default Register
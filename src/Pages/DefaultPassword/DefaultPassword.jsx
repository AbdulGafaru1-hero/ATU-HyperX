import React from 'react';
import "../DefaultPassword/DefaultPassword.css"

function ResetPassword() {
  return (
    <div className="resetPassword">
<h3>Hi user! welcome to ATU hyperX</h3>
<p>Change your default password </p>

<div className="passwordInputs">
  <div className="oldPassword">
  <label htmlFor="old password">Old Password</label>
  <input type="password" placeholder='enter old password'/>
  </div>
  <div className="newPassword">
  <label htmlFor="new password">New Password</label>
  <input type="password" placeholder='enter new password'/>
  </div>
  <div className="confirmPassword">
  <label htmlFor="confirm new password">Confirm New Password</label>
  <input type="password" placeholder='confirm new password'/>
  </div>
</div>
<button type='button' className='continueButton'>Continue</button>
    </div>
  )
}

export default ResetPassword
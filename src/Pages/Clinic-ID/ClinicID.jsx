import "../Clinic-ID/ClinicID.css"

function ClinicID() {
  return (
    <div className='clinicId'>
<h3 className="IdTitle">Create new Clinic ID</h3>
<div className="IdForm">
<label className="firstnameID" name="firstname">Firstname
    <input type="text" /></label>

<label className="lastnameID" name="lastname">Lastname
    <input type="text" /></label>

<div className="gender">
    <p>Gender:</p>
<label name="male">
<input value="1" type="checkbox" />
    Male</label>

<label name="female">
<input type="checkbox" value="1"/>
    Female</label>
</div>
<div className="patientType">
<p>Patient Type:</p>
<label name="student">
<input type="checkbox" value="1"/>
    Student</label>

<label name="staff">
<input type="checkbox" value="1" />
    Staff</label>
</div>

<label className="staff" name="staffId">Student / Staff ID
    <input type="text" /></label>
    <button className="clinicIDBtn">Create Clinic ID</button>
    </div>
    </div>
  )
}

export default ClinicID
import "../Clinic-ID/ClinicID.css";
import { useState } from "react";
import StudentId from "../../components/StudentID/studentId";
import StaffId from "../../components/StaffID/staffId";


function ClinicID() {

    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedPatientType, setSelectedPatientType] = useState(null);
  
    const handleGenderChange = (value) => {
      setSelectedGender(value);
    };
  
    const handlePatientTypeChange = (value) => {
      setSelectedPatientType(value);
    };
  
const [modal, setModal] = useState(false);


const toggleModal = () => {
  setModal(!modal)
}

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
          <label name="male" >
            <input
              type="checkbox"
              name="gender"
              value="male"
              checked={selectedGender === "male"}
              onChange={() => handleGenderChange("male")}
            />
            Male
          </label>

          <label name="female">
            <input
              type="checkbox"
              name="gender"
              value="female"
              checked={selectedGender === "female"}
              onChange={() => handleGenderChange("female")}
            />
            Female
          </label>
        </div>
        
        <div className="patientType">
          <p>Patient Type:</p>
         
          { modal ?  <StudentId toggleModal={toggleModal}/> : <label name="student" onClick={toggleModal}>
            <input
              type="checkbox"
              name="patientType"
              value="student"
              checked={selectedPatientType === "student"}
              onChange={() => handlePatientTypeChange("student")}
            />
            Student
          </label>}

   {modal ?  <StaffId toggleModal={toggleModal}/> :
          <label name="staff" onClick={toggleModal}>
            <input
              type="checkbox"
              name="patientType"
              value="staff"
              checked={selectedPatientType === "staff"}
              onChange={() => handlePatientTypeChange("staff")}
            />
            Staff
          </label>}
         
        </div>
<label className="staff" name="staffId">Student / Staff ID
    <input type="text" /></label>
    <button className="clinicIDBtn">Create Clinic ID</button>
    </div>
    </div>
  )
}

export default ClinicID
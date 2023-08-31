import "../OPD/Opd.css"

function Opd() {
  return (
    <div className='opd'>
    <div className="opdBtn">
        <button className="recBtn">OPD Records</button>
        <button className="createBtn">Create new Clinic ID</button>
    </div>
    <h3>Add visit records for patient</h3>
<div className="patientRecords">
<label name="patientID">Patient ID
<input className="input patientId" type="text"/></label>

<div className="temp">
    <label name="date">Date/Time
    <input className="input" type="datetime-local" /></label>

    <label name="temperature">Temperature
    <input className="input" type="text" /> </label>
</div>
<div className="weight">
    <label name="weight">Weight
    <input className="input" type="text" /></label>

    <label name="weight">Blood Pressure
    <input className="input" type="text" /></label>
</div>
<button className="addPatient">Add Patient</button>
</div>

    </div>
  )
}

export default Opd
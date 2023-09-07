import "../Physician/Physician.css";


function Physician() {
  return (
    <div className="physicianPage">
    <div className="physicianSidebar">
<h3>Active Patients</h3>

<div className="activePatient">
    <h3>Patient ID</h3>
    <p>01234567D</p>
</div>

    </div>
        <div className="physicianFeed">
            <h3 className="feedTitle">Patient Health Record (Current)</h3>
        <div className="currentRecords">
        <label name="temperature">Temperature
        <input className="inputPhy" type="text" /></label>
        <label name="weight">Weight
        <input className="inputPhy" type="text" /></label>
        <label name="weight">Blood Pressure
        <input className="inputPhy" type="text" /></label>
        </div>
            <div className="physicianTextarea">
                <div className="textareaTop">
                    <label name="symptoms">Symptoms<textarea name="symptoms" className="symptoms" ></textarea></label>

                    <label name="diagnosis"> Diagnosis<textarea name="diagnosis" className="diagnosis" ></textarea></label>
                </div>
                <div className="prescriptions">
                <label name="prescription"> Prescriptions<textarea name="prescription" className="prescription" cols="30" rows="10"></textarea></label>
                </div>
            </div>
            <div className="actions">
                <h3>Actions</h3>
                <div className="actionsButtons">
                    <button className="actionButton">Lab Recommendation</button>
                    <button className="actionButton">Drug Prescription</button>
                    <button className="actionButton">Transfer Patient</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Physician
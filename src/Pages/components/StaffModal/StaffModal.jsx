import "./StaffModal.css"


function staffId({ toggleStaffModal }) {
  return (
    <div className="staffModal">
    <label className="staffId" name="staffId">Staff ID
        <input type="text" /></label>
        <button type="button" className="submit" onClick={toggleStaffModal}>Continue</button></div>
  )
}

export default staffId
import "../StaffID/staffId.css"


function staffId({ toggleModal }) {
  return (
    <div>
    <label className="staffId" name="staffId">Staff ID
        <input type="text" /></label>
        <button type="button" className="submit" onClick={toggleModal}>Continue</button></div>
  )
}

export default staffId
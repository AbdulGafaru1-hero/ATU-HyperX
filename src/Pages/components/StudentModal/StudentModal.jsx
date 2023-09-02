import "./StudentModal.css"

function studentId( { toggleModal}) {
  return (
    <div className='studentModal modalOverlay'>
<label className="findexNumber" name="indexNumber">Index Number
    <input type="text" /></label>
<label className="department" name="department">Department
    <input type="text" /></label>
    <button type="button" className="modalBtn" onClick={toggleModal}>Continue</button>
    </div>
  )
}

export default studentId
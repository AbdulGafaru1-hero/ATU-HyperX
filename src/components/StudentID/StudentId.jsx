import "../StudentID/studentId.css"

function studentId( { toggleModal}) {
  return (
    <div className='studentId'>
<label className="findexNumber" name="indexNumber">Index Number
    <input type="text" /></label>
<label className="department" name="department">Index Number
    <input type="text" /></label>
    <button type="button" className="submit" onClick={toggleModal}>Continue</button>s
    </div>
  )
}

export default studentId
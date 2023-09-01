import "../OPDRecords/OpdRecords.css";
import { BsSearch} from 'react-icons/bs';
import { MdExpandMore} from 'react-icons/md';


const patients = [
    {
      id: 1,
      fullName: 'Abdul Basit',
      age: 25,
      sex: 'Male',
      patientType: 'Student',
      lastVisit: '2023-08-25'
    },
    {
      id: 2,
      fullName: 'Abigail Appiah',
      age: 30,
      sex: 'Female',
      patientType: 'Staff',
      lastVisit: '2023-08-26'
    },
    {
      id: 3,
      fullName: 'John Doe',
      age: 23,
      sex: 'Male',
      patientType: 'Student',
      lastVisit: '2023-08-27'
    },
   
  ];

function OpdRecords() {
  return (
<>
    <div className="opdRecords">
        <h3>OPD Records</h3>
        <div className="searchSection">
            <div className="searchInput">
            <input type="search" placeholder="search patient by ID/name"/> <BsSearch className="searchIcon"/></div>
   <div className="searchBtns">
    <button className="all">All <MdExpandMore/></button>
    <button className="SearchBtn">Search</button>
   </div>
        </div>
    </div>
    <div className="table-container">
    <table className="stripped-table">
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Full Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Patient Type</th>
          <th>Last Visit</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.fullName}</td>
            <td>{row.age}</td>
            <td>{row.sex}</td>
            <td>{row.patientType}</td>
            <td>{row.lastVisit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="nextBtns">
    <button className="activeBtn">1</button>
    <button className="nextBtn">2</button>
    <button className="nextBtn">3</button>
    <button className="nextBtn">4</button>
  </div>
  </>
  )
}

export default OpdRecords
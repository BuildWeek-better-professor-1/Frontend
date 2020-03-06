import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfessors, getStudents } from "../redux/actions/actions";
import { decode } from "jsonwebtoken";
// import { Link } from "react-router-dom";

const ProfDashboard = props => {
  //calling the action "fetchSingleProfessor" from action.js to call
  //the API request...
  // const fetchSingleProfessor = e => {
  //   e.preventDefault();
  //   props.getProfessors();
  // };

  // const [professorId, getProfessorsId] = useState();

  const handleSubmit = () => {
    localStorage.clear();
    console.log("GG: localStorage: ", localStorage.clear());
  };

  useEffect(() => {
    const { subject } = decode(localStorage.getItem("token"));
    props.getProfessors(subject);
    props.getStudents(subject);
  }, []);

  const professor = props.professor;
  return (
    <>
      <div key={"hello"} className="dashboard-main-container">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="box-task-container">
          <div className="box-task-1">
            <p className="box-title">Welcome</p>
            <p className="task-welcome-name"> {professor.username}</p>
            {/* <button
                className="box-button"
                title="Display your name"
                // onClick={fetchSingleProfessor}
              >
                Show Name
              </button> */}
          </div>
          <div className="box-task-container">
            <div className="box-task">
              <p className="box-title">My Students</p>

              <div className="reminder-list-container">
                {props.students.map(student => (
                  <p className="reminder">{student.firstName}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="box-task-container">
            <div className="box-task-2">
              <p className="box-title">Dashboard Tools</p>

              {/* This "Add Professor" button is for testing that the data is flowing from state...
               it will work differently once server works again.*/}

              <a href="/addreminders">
                <button className="box-button">Add Students</button>
              </a>
              <button
                className="box-button"
                title="You must click reminder first"
              >
                Edit
              </button>
              <button
                className="box-button"
                title="You must click reminder first"
              >
                Delete
              </button>
              <a
                className="box-button-logout"
                title="Sign Out of Profile"
                onClick={handleSubmit}
                href="/signedout"
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//getting professor & error state to be able to pass it using props in
//this component
const mapStateToProps = state => ({
  professor: state.professor,
  students: state.students,
  error: state.error
});

export default connect(mapStateToProps, {
  getProfessors,
  getStudents
})(ProfDashboard);

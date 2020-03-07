import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfessors, getStudents } from "../redux/actions/actions";
import { decode } from "jsonwebtoken";
import Popup from "reactjs-popup";
import AddStudentsForm from "./AddRemindersForm";
import SignoutMessage from "./SignoutMessage";
// import { Link } from "react-router-dom";

const ProfDashboard = props => {
  //calling the action "fetchSingleProfessor" from action.js to call
  //the API request...
  // const fetchSingleProfessor = e => {
  //   e.preventDefault();
  //   props.getProfessors();
  // };

  // const [professorId, getProfessorsId] = useState();

  const handleSubmit = e => {
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
            <div className="user-avatar">
              <img src="https://cdn.iconscout.com/icon/free/png-256/user-1958890-1653048.png"></img>
              <p className="task-welcome-name"> {professor.username}</p>
            </div>
          </div>
          <div className="box-task-container">
            <div className="box-task">
              <p className="box-title">My Students</p>

              <div className="reminder-list-container">
                {props.students.map(student => (
                  <Popup
                    trigger={<p className="reminder">{student.firstName}</p>}
                    modal
                  >
                    {close => (
                      <>
                        <AddStudentsForm />
                        <button className="modal-close" onClick={close}>
                          X
                        </button>
                      </>
                    )}
                  </Popup>
                ))}
              </div>
            </div>
          </div>
          <div className="box-task-container">
            <div className="box-task-2">
              <p className="box-title">Dashboard Tools</p>

              <button className="box-button">Add Students</button>
              <button
                className="box-button"
                title="You must click reminder first"
              >
                Edit Student
              </button>
              <button
                className="box-button"
                title="You must click reminder first"
              >
                Delete Student
              </button>
              <Popup
                trigger={
                  <a
                    className="box-button-logout"
                    title="Sign Out of Profile"
                    onClick={handleSubmit}
                  >
                    Sign Out
                  </a>
                }
                modal
              >
                <>
                  <SignoutMessage />
                </>
              </Popup>
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

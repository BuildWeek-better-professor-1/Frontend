import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getProfessors,
  getStudents,
  addReminders,
  deleteProfessor
} from "../redux/actions/actions";
import { decode } from "jsonwebtoken";
import Popup from "reactjs-popup";
import AddRemindersForm from "./AddRemindersForm";
import SignoutMessage from "./SignoutMessage";
import { Link } from "react-router-dom";

const ProfDashboard = props => {
  console.log("props", props);
  const [deleting, setDeleting] = useState([]);

  const handleSubmit = () => {
    localStorage.clear();
    // console.log("GG: localStorage: ", localStorage.clear());
  };
  const handleDelete = e => {
    e.preventDefault();
    const { subject } = decode(localStorage.getItem("token"));
    props.deleteProfessor(subject, deleting);
    setDeleting(deleting.filter(deleted => deleted.subject !== subject));
    //removes token from user that just deleted their account.
    //this way they can't see the dashboard anymore.
    localStorage.clear();
    //forces reload after delete happens and sends them back to login.
    window.location.reload(true);
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
          <div className="professor-settings">
            <div className="box-task-1">
              <p className="box-title">Welcome</p>
              <div className="user-avatar">
                <img src="https://cdn.iconscout.com/icon/free/png-256/user-1958890-1653048.png"></img>
                <p className="task-welcome-name"> {professor.username}</p>
              </div>
            </div>
            <div className="box-task-1">
              <p className="box-title">Settings</p>
              <button
                className="delete-professor-button"
                onClick={handleDelete}
              >
                Delete Account
              </button>
              <br></br>
              <Link to="/editprofessor">
                <button className="delete-professor-button">
                  Edit Account
                </button>
              </Link>
            </div>
          </div>
          <div className="box-task">
            <p className="box-title">My Students</p>
            <div className="reminder-list-container">
              {props.students.length &&
                "NO" &&
                props.students.map(student => (
                  <Popup
                    trigger={<p className="reminder">{student.firstName}</p>}
                    modal
                  >
                    {close => (
                      <>
                        <AddRemindersForm />
                        <button className="modal-close" onClick={close}>
                          X
                        </button>
                      </>
                    )}
                  </Popup>
                ))}
            </div>
          </div>
          <div className="box-task-2">
            <p className="box-title">Dashboard Tools</p>
            <Link to="/addstudents">
              <button className="box-button">Add Students</button>
            </Link>
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
  getStudents,
  deleteProfessor
})(ProfDashboard);

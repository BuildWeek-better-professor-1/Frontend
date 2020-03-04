import React from "react";
import { connect } from "react-redux";
import { getProfessors } from "../redux/actions/actions";
import { Link } from "react-router-dom";

const ProfDashboard = props => {
  //calling the action "fetchSingleProfessor" from action.js to call
  //the API request...
  const fetchSingleProfessor = e => {
    e.preventDefault();
    props.getProfessors();
  };

  const handleSubmit = () => {
    localStorage.clear();
    console.log("GG: localStorage: ", localStorage.clear());
  };

  return (
    <>
      <div className="dashboard-main-container">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="box-task-container">
          <div className="box-task-1">
            <p className="box-title">Welcome</p>
            <p className="task-welcome-name"> {props.professor}</p>
            <button
              className="box-button"
              title="Display your name"
              onClick={fetchSingleProfessor}
            >
              Show Name
            </button>
          </div>
          <div className="box-task-container">
            <div className="box-task">
              <p className="box-title">Reminders</p>
              <div className="reminder-list-container">
                {/* ========== DUMMY DATA ========== */}
                <p className="reminder">Grade Giovani's Paper</p>
                <p className="reminder">Get New Books For Students</p>
                <p className="reminder">New Class Starting Today</p>
                <p className="reminder">Get More Markers</p>
                <p className="reminder">Talk with Giovani</p>
                <p className="reminder">Set Up Parents Confrence</p>
                <p className="reminder">Create a Website for Students</p>
                <p className="reminder">Create a Website for Students</p>
                {/* ========== [END] DUMMY DATA ========== */}
              </div>
            </div>
          </div>
          <div className="box-task-container">
            <div className="box-task-2">
              <p className="box-title">Dashboard Tools</p>

              {/* This "Add Professor" button is for testing that the data is flowing from state...
               it will work differently once server works again.*/}

              <button className="box-button">Add</button>
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
                href="/proflogin"
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
  error: state.error
});

export default connect(mapStateToProps, { getProfessors })(ProfDashboard);

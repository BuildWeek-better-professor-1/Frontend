import React from "react";
import Circle from "../assets/Circle.svg";
import { connect } from "react-redux";
import { getProfessors } from "../redux/actions/actions";

const ProfDashboard = props => {
  //calling the action "fetchSingleProfessor" from action.js to call
  //the API request...
  const fetchSingleProfessor = e => {
    e.preventDefault();
    props.getProfessors();
  };

  return (
    <>
      <div className="dashboard-main-container" key={"hello"}>
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="box-task-container">
          <div className="box-task">
            <p className="box-title">Welcome</p>
            <p className="task-welcome-name"> {props.professor}</p>
          </div>
          <div className="box-task-container">
            <div className="box-task">
              <p className="box-title">Tasks Open</p>
              <img className="task-circle" alt="circle" src={Circle} />
              <p className="task-count-circle">{0}</p>
            </div>
          </div>
          <div className="box-task-container">
            <div className="box-task">
              <p className="box-title">Dashboard Tools</p>

              {/* This "Add Professor" button is for testing that the data is flowing from state...
               it will work differently once server works again.*/}

              <button className="box-button" onClick={fetchSingleProfessor}>
                Add Professor
              </button>
              <button className="box-button">Edit Reminder</button>
              {/* <button className="box-button">Add Student</button>
              <button className="box-button">Edit Student</button>
              <button className="box-button">Delete Student</button> */}
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

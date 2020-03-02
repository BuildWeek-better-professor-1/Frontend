import React from "react";
import Circle from "../assets/Circle.svg";

const ProfDashboard = () => {
  let user = "Giovani";
  let count = 0;
  return (
    <>
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-main-container">
        <div className="box-task-container">
          <div className="box-task">
            <p className="box-title">Welcome</p>
            <p className="task-welcome-name">{user}</p>
          </div>
          <div className="box-task-container">
            <div className="box-task">
              <p className="box-title">Tasks Open</p>
              <img className="task-circle" src={Circle} />
              <p className="task-count-circle">{count}</p>
            </div>
          </div>
          <div className="box-task-container">
            <div className="box-task">
              <p className="box-title">Dashboard Tools</p>
              <button className="box-button">Add Task</button>
              <button className="box-button">Edit Task</button>
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

export default ProfDashboard;

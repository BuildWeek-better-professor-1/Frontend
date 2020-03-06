import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import { decode } from "jsonwebtoken";
import { useInterval } from "../../hooks";

const StudentDashBoard = ({ initialReminders }) => {
  const [id, setId] = useState(null);

  const [reminders, setReminders] = useState(initialReminders);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const { subject } = decode(token);
    setId(subject);
  }, []);

  useEffect(() => {
    for (let i = 0; i < reminders.length; i++) {
      if (reminders[i]["Due date"] <= Date.now()) {
        reminders[i].passed_due = true;
      }
    }
  }, [reminders]);

  //simple signout handle
  const handleChange = () => {
    localStorage.clear();
    console.log("GG: localStorage: ", localStorage.clear());
  };

  const getReminders = async () => {
    try {
      const { data } = await axiosWithAuth().get(
        `api/students/${id}/reminders`
      );
      setReminders(data.data.reminders);
    } catch (e) {
      console.log(e);
    }
  };

  useInterval(getReminders, 5000);

  return (
    <>
      <a onClick={handleChange} href="/students">
        Sign Out
      </a>
      <h1>Student Dash Board</h1>
      {reminders.map(r => (
        <div className={r.passed_due ? "reminder urgent" : "reminder"}>
          <h3>{r.project_name}</h3>
          <p>{r.descriptions}</p>
        </div>
      ))}
    </>
  );
};

export default StudentDashBoard;

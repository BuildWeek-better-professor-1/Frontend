import React, { useEffect, useState } from "react";
import { addReminders } from "../redux/actions/actions";
import { connect } from "react-redux";
import { decode } from "jsonwebtoken";

const AddReminderForm = props => {
  const [add, setAdd] = useState({});

  const handleChange = e => {
    e.preventDefault();
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    const { subject } = decode(localStorage.getItem("token"));
    e.preventDefault();
    props.addReminders(subject);
    setAdd({ message: "" });
  };
  return (
    <div className="add-reminder-form-container">
      <h2>Add Reminder to Student</h2>
      <form>
        {/* <input
          type="text"
          name="Project Name"
          placeholder="Project Name"
          value={props["Project Name"]}
          onChange={handleChange}
        /> */}
        <input
          className="reminder-form-message-input"
          type="text"
          name="message"
          placeholder="Message"
          value={add.reminder}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Add </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  reminder: state.reminder
});

export default connect(mapStateToProps, {
  addReminders
})(AddReminderForm);

import React, { useEffect, useState } from "react";
import { addReminders } from "../redux/actions/actions";
import { connect } from "react-redux";
const AddStudentsFrom = props => {
  console.log(props);
  //   useEffect(() => {
  //     props.addReminders();
  //   }, []);

  const [add, setAdd] = useState([]);
  const handleChange = e => {
    e.preventDefault();
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const message = "hello";
    console.log(message);
    props.history.push("/professordashboard");
  };
  //   const handleChange = e => {
  //     e.preventDefault();
  //     props.reminder({ ...props.state, [e.target.name]: e.target.value });
  //   };

  return (
    <>
      <p>Add New Reminder</p>
      <form>
        <input
          type="text"
          name="Project Name"
          placeholder="Project Name"
          value={props["Project Name"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={props.message}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Add </button>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  reminder: state.reminder
});

export default connect(mapStateToProps, { addReminders })(AddStudentsFrom);

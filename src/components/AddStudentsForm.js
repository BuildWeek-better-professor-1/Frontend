import React, { useState } from "react";
import { addNewStudent } from "../redux/actions/actions";
import { connect } from "react-redux";
import { decode } from "jsonwebtoken";

const AddStudentsForm = props => {
  const [adding, setAdding] = useState({
    firstName: "",
    lastName: ""
  });

  console.log("PROPS FROM ADDSTUDENTS", props);

  const handleChange = e => {
    e.preventDefault();
    setAdding({ ...adding, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    const { subject } = decode(localStorage.getItem("token"));
    e.preventDefault();
    props.addNewStudent(subject, adding);
    setAdding({ firstName: "", lastName: "" });
    props.history.push("/professordashboard");
  };
  return (
    <>
      <h2>Add A New Student</h2>
      <input
        className="reminder-form-message-input"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={adding.firstName}
        onChange={handleChange}
        required
      />
      <input
        className="reminder-form-message-input"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={adding.lastName}
        onChange={handleChange}
        required
      />
      <br></br>
      <button onClick={handleSubmit}>ADD STUDENT</button>
    </>
  );
};

const mapStateToProps = state => ({
  students: state.students
});

export default connect(mapStateToProps, { addNewStudent })(AddStudentsForm);

import React, { useState, useEffect } from "react";
import { editProfessor } from "../redux/actions/actions";
import { connect } from "react-redux";
import { decode } from "jsonwebtoken";
import { axiosWithAuth } from "./axiosWithAuth";

const EditProfessorForm = props => {
  const [edit, setEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  });

  //   useEffect(() => {
  //     const { subject } = decode(localStorage.getItem("token"));
  //     axiosWithAuth()
  //       .get(`/api/users/professor/${subject}`)
  //       .then(res => {
  //         console.log("here is the get from EditRental", res.data);
  //         setEdit(res.data.data.user);
  //       })
  //       .catch(err => console.log("Did not get rental from EditRental", err));
  //   }, []);

  const handleChange = e => {
    e.preventDefault();
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    const { subject } = decode(localStorage.getItem("token"));
    e.preventDefault();
    props.editProfessor(subject, edit);
    setEdit({
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: ""
    });
    props.history.push("/professordashboard");
  };
  return (
    <>
      <p>Edit Your Account</p>
      <form onSubmit={handleSubmit}>
        <input
          className="reminder-form-message-input"
          type="text"
          name="first_name"
          placeholder="First Name"
          value={edit.first_name}
          onChange={handleChange}
        />
        <input
          className="reminder-form-message-input"
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={edit.last_name}
          onChange={handleChange}
        />
        <input
          className="reminder-form-message-input"
          type="text"
          name="email"
          placeholder="Email"
          value={edit.email}
          onChange={handleChange}
        />
        <input
          className="reminder-form-message-input"
          type="text"
          name="username"
          placeholder="username"
          value={edit.username}
          onChange={handleChange}
        />
        <br></br>
        <button>EDIT</button>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  professor: state.professor
});

export default connect(mapStateToProps, { editProfessor })(EditProfessorForm);

import React, { useState } from "react";
import axios from "axios";
// import "./App.css";

const StudentLoginForm = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const { data } = await axios.post("https://better-professor-app-1.herokuapp.com/api/auth/login", { ...user, type: "student" })

      localStorage.setItem("token", data.token)

    } catch (e) {
      setError(e.response.data.errorMessage || e.response.data.message)
      setTimeout(() => setError(""), 3000)
    }

    const handleChange = (event) => {
      setUser({ ...user, [event.target.name]: event.target.value });
    }
  };

  return (
    <div className="student_login-container">
      <h2>Student Login</h2>
      <form className="student_login-form" onSubmit={handleSubmit}>
        <input className="student_login-input" onChange={handleChange} name="username" value={user.username} placeholder="username" />
        <input className="student_login-input" onChange={handleChange} name="password" value={user.password} placeholder="password" />
        <input className="student_login-submit" type="submit" value="Submit" />
      </form>
      <span>{error}</span>
    </div>
  );
};

export default StudentLoginForm;
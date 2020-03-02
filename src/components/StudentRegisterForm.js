import React, { useState } from "react";
import axios from "axios";

const StudentRegisterForm = () => {
  const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", email: "" })
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const { data } = await axios.post("https://better-professor-app-1.herokuapp.com/api/auth/register", { ...user, type: "student" })
      console.log(data)
    } catch (e) {
      console.log(e.response.data.message)
      setError(e.response.data.message)
      setTimeout(() => setError(""), 3500)
    }
  }
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="username" value={user.username} placeholder="username" />
        <input onChange={handleChange} name="password" value={user.password} placeholder="password" />
        <input onChange={handleChange} name="firstName" value={user.firstName} placeholder="first name" />
        <input onChange={handleChange} name="lastName" value={user.lastName} placeholder="last name" />
        <input onChange={handleChange} name="email" value={user.email} placeholder="email" />
        <input type="submit" value="Submit" />
      </form>
      <span>{error}</span>
    </div>
  );

};

export default StudentRegisterForm;

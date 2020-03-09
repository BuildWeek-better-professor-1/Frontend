import React, { useState } from "react";
import axios from "axios";
import './styles/StudentRegisterForm.css'
import { useHistory} from 'react-router-dom'

const StudentRegisterForm = ({getAuth, studentID }) => {
  const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", email: "" })
  const [error, setError] = useState("")

  const history = useHistory()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const { data } = await axios
        .put(`https://better-professor-app-1.herokuapp.com/api/students/${studentID}?register=true`, { ...user, registered: true })

      console.log(data.data)
      localStorage.setItem('token', data.data.token)

      getAuth()
    } catch (e) {
      console.log(e)
      // console.log(e.response.data.message)
      // setError(e.response.data.message)
      // setTimeout(() => setError(""), 3500)
    }
  }
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  return (
    <div className="student_register-container">
      <h2>Student Registration</h2>
      <form className="student_register-form" onSubmit={handleSubmit}>
        <input className="student_register-input" onChange={handleChange} name="username" value={user.username} placeholder="username" />
        <input className="student_register-input" onChange={handleChange} name="password" value={user.password} placeholder="password" />
        <input className="student_register-input" onChange={handleChange} name="firstName" value={user.firstName} placeholder="first name" />
        <input className="student_register-input" onChange={handleChange} name="lastName" value={user.lastName} placeholder="last name" />
        <input className="student_register-input" onChange={handleChange} name="email" value={user.email} placeholder="email" />
        <input className="student_register-submit" type="submit" value="Submit" />
      </form>
      <span>{error}</span>
    </div>
  );

};

export default StudentRegisterForm;

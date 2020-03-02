import React, { useState } from "react";
import axios from "axios";

const StudentRegisterForm = () => {
  const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", email: ""})
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

    const handleChange = event => {
      setUser({ ...user, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
      event.preventDefault();
      console.log(user.name);
      console.log(user.email);
      console.log(user.password);
    }

    return (
      <div className="StudentRegisterForm">
        <form onSubmit={handleSubmit}>
          <h2>Student Registration</h2>
          <div className="content">
            <div className="form">
              <label>
                Username
              <input
                  type="string"
                  name="username"
                  placeholder="username"
                  onChange={handleChange} />
              </label>
              <label>
                Password
              <input
                  type="string"
                  name="password"
                  placeholder="password"
                  onChange={handleChange} />
              </label>
              <label>
                First Name
              <input
                  type="string"
                  name="firstName"
                  placeholder="first name"
                  onChange={handleChange} />
              </label>
              <label>
                Last Name
              <input
                  type="string"
                  name="lastName"
                  placeholder="last name"
                  onChange={handleChange} />
              </label>
              <label>
                Email
              <input
                  type="string"
                  name="email"
                  placeholder="email"
                  onChange={handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </div>
          </div>

        </form>
        <span>{error}</span>
      </div>
    );
  };
};

export default StudentRegisterForm;

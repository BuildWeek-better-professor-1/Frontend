import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/StudentLoginForm.css";
import { useHistory, Redirect, Link } from "react-router-dom";

const StudentLoginForm = ({ getAuth }) => {
  // useEffect(() => {if(resetLoading){
  //   resetLoading()
  // }}, [])
  // console.log('studnetLoginProps', props.location.state)
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  // const [redirect, setRediret] = useState(false)

  const history = useHistory();

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://better-professor-app-1.herokuapp.com/api/auth/login",
        { ...user, type: "s" }
      );
      // console.log('ddd', response.data.data.token)
      localStorage.setItem("token", response.data.data.token);
      getAuth();
      // setAuthorized(true)
      // history.push('/students')
      // setRediret(true)
      // let token = localStorage.getItem('token')
      // while (!token) {
      //   token = localStorage.getItem('token')
      // }
      // setTimeout(()=>history.push('/students'), 3000)
    } catch (e) {
      if (e.response) {
        setError(e.response.data.errorMessage || e.response.data.message);
        setTimeout(() => setError(""), 3000);
      }
      console.log(e);
    }
  };

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // if (!redirect) {
  return (
    <div className="student_login-container">
      <h2>Student Login</h2>
      <form className="student_login-form" onSubmit={handleSubmit}>
        <input
          className="student_login-input"
          onChange={handleChange}
          name="username"
          value={user.username}
          placeholder="username"
        />
        <input
          type="password"
          className="student_login-input"
          onChange={handleChange}
          name="password"
          value={user.password}
          placeholder="password"
        />
        <input className="student_login-submit" type="submit" value="Submit" />
        <p>
          Are you a Professor?{" "}
          <Link className="register-form-link" to="/proflogin">
            <span>Login</span>
          </Link>
        </p>
      </form>
      <span>{error}</span>
    </div>
  );
  // }

  // if(redirect) {
  //   return <Redirect to="/students" />
  // }
};

export default StudentLoginForm;

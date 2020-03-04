import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './styles/ProfLoginForm.css'

const ProfLoginForm = () => {
  const [formState, setFormState] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const history = useHistory()

  const handleSubmit = async (event) => {
    console.log('profLoginState', formState)
    try {
      event.preventDefault()

      const { data } = await axios.post("https://better-professor-app-1.herokuapp.com/api/auth/login?type=p", { ...formState })

      localStorage.setItem("token", data.token)

      history.push('/professordashboard')
    } catch (e) {
      setError(e.response.data.errorMessage || e.response.data.message)
      setTimeout(() => setError(""), 3000)
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  return (
    <div className="prof_login-container">
      <h2>Professor Login</h2>

      <form className="prof_login-form" onSubmit={handleSubmit}>
        <input className="prof_login-input" onChange={handleChange} name="username" value={formState.username} placeholder="username" />
        <input className="prof_login-input" onChange={handleChange} name="password" value={formState.password} placeholder="password" />
        <input className="prof_login-submit" type="submit" value="Submit" />
      </form>
      
      <span className="prof_login-error" >{error}</span>
    </div>
  );
};



export default ProfLoginForm;

import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const ProfLoginForm = () => {
  const [formState, setFormState] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
const history = useHistory()
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const { data } = await axios.post("https://better-professor-app-1.herokuapp.com/api/auth/login", { ...formState, type: "professor" })
      localStorage.setItem("token", data.token)
      // handle token
      // data: {
      //     message: `Welcome ${saved.firstName}`,
      //     user: {
      //         id: saved.id,
      //         username: saved.username,
      //         "First Name": saved.firstName,
      //         "Last Name": saved.lastName,
      //                           email: saved.email
      //     },
      //     token
      // }
      // handle redirect
      history.push('/professordashboard')
      console.log(data)
    } catch (e) {
      console.log(e.response)
      setError(e.response.message)
      setTimeout(setError(""), 3500)
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="username" value={formState.username} placeholder="username" />
        <input onChange={handleChange} name="password" value={formState.password} placeholder="password" />
        <input type="submit" value="Subbmit" />
      </form>
      <span className={error ? "err-message" : "err-message hidden"}>{error || null}</span>
    </div>
  );
};



export default ProfLoginForm;

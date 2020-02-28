import React, { useState } from "react";
const axios = require('axios')

const ProfRegisterForm = () => {

  const [formState, setFormState] = useState({ username: "", password: "" })
  const [error, setError] = useState("")


  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const { data } = await axios.post("https://better-professor-app-1.herokuapp.com/api/auth/register", formState)
      console.log(data)
    //   data: {
    //     message: `Welcome ${saved['First Name']}`,
    //     user: {...saved},
    //     token
    // }
      // handle redirect
    } catch (e) {
      console.log(e)
      setError(e.response.errMessage)
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
      </form>
      <span className={error ? "err-message" : "err-message hidden"}>{error || null}</span>
    </div>
  );
};

export default ProfRegisterForm;

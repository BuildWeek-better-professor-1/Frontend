import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const ProfRegisterForm = () => {

  const [formState, setFormState] = useState({ username: "", password: "", firstName: "", lastName: "", email: "", step: 1 })
  const [error, setError] = useState("")
  const history = useHistory()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const { data } = await axios.post("https://better-professor-app-1.herokuapp.com/api/auth/register", { ...formState, type: "professor" })
      console.log(data)
      //   data: {
      //     message: `Welcome ${saved['First Name']}`,
      //     user: {...saved},
      //     token
      // }
      // handle redirect
      history.push('/profLogin')
    } catch (e) {
      console.log(e.response.data.message)
      setError(e.response.data.message)
      setTimeout(() => setError(""), 3500)
    }
  }

  const handleNext = () => {
    let currentStep = formState.step
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    setFormState({ ...formState, step: currentStep })
  }

  const handlePrev = () => {
    let currentStep = formState.step
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    setFormState({ ...formState, step: currentStep })
  }

  const previousButton = () => {
    let currentStep = formState.step;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={handlePrev}>
          Previous
      </button>
      )
    }
    return null;
  }

  const nextButton = () => {
    let currentStep = formState.step;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={handleNext}>
          Next
      </button>
      )
    }
    return null;
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="firstName" value={formState.firstName} placeholder="first name" />
        <input onChange={handleChange} name="lastName" value={formState.lastName} placeholder="last name" />

        <input onChange={handleChange} name="username" value={formState.username} placeholder="username" />
        <input onChange={handleChange} name="password" value={formState.password} placeholder="password" />


        <input onChange={handleChange} name="email" value={formState.email} placeholder="email" />
        <input type="submit" value="Submit" />
      </form>
      <span>{error}</span>
    </div>
  );
};

export default ProfRegisterForm;

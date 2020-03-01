import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { Step1, Step2, Step3 } from './steps'
const ProfRegisterForm = () => {

    const [formState, setFormState] = useState({ username: "", password: "", firstName: "", lastName: "", email: "", currentStep: 1 })
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
        console.log('handleNext before', formState)
        let currentStep = formState.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        setFormState({ ...formState, currentStep: currentStep })
        console.log('handleNext after', formState)
    }

    const handlePrev = () => {
        let currentStep = formState.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        setFormState({ ...formState, currentStep: currentStep })
    }

    const previousButton = () => {
        let currentStep = formState.currentStep;
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
        let currentStep = formState.currentStep;
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
            <h2>Professor Registration</h2>
            <form onSubmit={handleSubmit}>
                <Step1 handleChange={handleChange} {...formState} />
                <Step2 handleChange={handleChange} {...formState} />
                <Step3 handleChange={handleChange} {...formState} />
            </form>
            {previousButton()}
            {nextButton()}
            <span>{error}</span>
        </div>
    );
};

export default ProfRegisterForm;

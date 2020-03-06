import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// import "./styles/ProfRegisterForm.css";
import { Step1, Step2, Step3 } from './steps'
const ProfRegisterForm = () => {

    const [formState, setFormState] = useState({ username: "", password: "", firstName: "", lastName: "", email: "" })
    const [error, setError] = useState("")
    const [currentStep, setCurrentStep] = useState(1)
    const history = useHistory()

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const { data } = await axios.post("https://better-professor-app-1.herokuapp.com/api/auth/register", { ...formState })
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
        let nextCurrentStep = currentStep
        nextCurrentStep = nextCurrentStep >= 2 ? 3 : currentStep + 1
        setCurrentStep(nextCurrentStep)
        console.log('handleNext after', formState)
    }

    const handlePrev = () => {
        let nextCurrentStep = currentStep
        nextCurrentStep = nextCurrentStep <= 1 ? 1 : currentStep - 1
        setCurrentStep(nextCurrentStep)
    }

    const previousButton = () => {
        // let nextCurrentStep = currentStep;
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
        // let currentStep = currentStep;
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
        <div className=".prof_register-container" >
            <h2>Professor Registration</h2>
            <form className=".prof_register-form" onSubmit={handleSubmit}>
                <Step1 handleChange={handleChange} {...formState} currentStep={currentStep} />
                <Step2 handleChange={handleChange} {...formState} currentStep={currentStep} />
                <Step3 handleChange={handleChange} {...formState} currentStep={currentStep} />
            </form>
            {previousButton()}
            {nextButton()}
            <span>{error}</span>
        </div>
    );
};

export default ProfRegisterForm;

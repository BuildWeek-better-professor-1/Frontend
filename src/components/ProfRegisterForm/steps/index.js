import React from 'react'

export const Step1 = ({ handleChange, firstName, lastName, currentStep }) => {
    if (currentStep !== 1) {
        return null
    }
    return (
        <>
            <input onChange={handleChange} name="firstName" value={firstName} placeholder="first name" />
            <input onChange={handleChange} name="lastName" value={lastName} placeholder="last name" />
        </>
    )
}


export const Step2 = ({ handleChange, password, username, currentStep }) => {
    if (currentStep !== 2) {
        return null
    }
    return (
        <>
            <input onChange={handleChange} name="username" value={username} placeholder="username" />
            <input onChange={handleChange} name="password" value={password} placeholder="password" />
        </>
    )
}

export const Step3 = ({ handleChange, email, currentStep }) => {
    if (currentStep !== 3) {
        return null
    }
    return (
        <>
            <input onChange={handleChange} name="email" value={email} placeholder="email" />
            <input type="submit" value="Submit" />
        </>
    )
}




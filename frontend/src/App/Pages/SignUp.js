import React from 'react'
import WelcomeMessage from '../../utils/WellcomeMessage/WelcomeMessage'
import SignUpForm from '../Component/SignUpForm/SignUpForm'

const SignUp = () => {
    return (
        <div>
            <WelcomeMessage 
            type = "signUp"/>
            <SignUpForm/>
        </div>
    )
}

export default SignUp

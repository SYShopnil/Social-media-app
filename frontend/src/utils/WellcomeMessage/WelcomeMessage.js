import React from 'react'
import {Icon} from 'semantic-ui-react'
import styleSheet from './WellcomeMessage.module.css'

const WelcomeMessage = ({type}) => {
    let logoName, logoSize, logoColor, inputHeader, bodyMessage; 
    if(type == "signUp") {
        logoName = 'settings'
        logoSize = 'large'
        logoColor = 'teal'
        inputHeader = "Get Started"
        bodyMessage = "Create new Account"
    }else if (type == "logeIn") {
        logoName = 'key'
        logoSize = 'large'
        logoColor = 'teal'
        inputHeader = "Welcome Back"
        bodyMessage = "Login with email and password"
    }
    return (
        <div>
            <div className={`alert alert-primary ${styleSheet.wrapper}`} role="alert">
                {/* logo part */}
                <div style = {{flex: 1}}>
                    <Icon
                    name = {logoName}
                    size = {logoSize}
                    color = {logoColor}/>

                </div>
                <div  style = {{flex: 20}}>
                    <h6 className = {`${styleSheet.text}`} >{inputHeader}</h6>
                    <p className = {`${styleSheet.text}`}>{bodyMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeMessage

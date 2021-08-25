import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import NProgress from 'react-nprogress'
import  {Icon} from 'semantic-ui-react'
import navBarStyle from './Navbar.module.css'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("signUp")
    return (
        <div>
            <nav className= {`d-flex justify-content-center`} >
  `              <div className= {`container-fluid ${navBarStyle.navbarWrap}`}>
                    <span 
                    className= {`me-3 p-2 ${activeNav == "signUp" && navBarStyle.active}`} 
                    onClick = {(e) => setActiveNav(`signUp`) } >
                        <Link to = {"/signUp"} className = {`${navBarStyle.navTextColor}`} >
                            <Icon
                            name = "signup"
                            link/>
                            Sign Up
                        </Link>
                    </span>
                    <span  
                    className= {`p-2 ${activeNav == "signIn" && navBarStyle.active}`} 
                    onClick = {(e) => setActiveNav(`signIn`) } >
                        <Link to = {"/signIn"}  className = {`${navBarStyle.navTextColor}`} >
                            <Icon
                            name = "sign-in"
                            link/>
                            Log in
                        </Link> 
                    </span>
                </div>
            </nav>`
        </div>
    )
}

export default Navbar

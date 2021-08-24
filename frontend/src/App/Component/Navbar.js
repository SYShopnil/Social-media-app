import React from 'react'
import { Link } from 'react-router-dom'
import NProgress from 'react-nprogress'
import  {Icon} from 'semantic-ui-react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar-expand-lg navbar-light bg-light">
  `              <div class="container-fluid">
                    <span>
                        <Link to = {"/"} >
                            <Icon
                            name = "signup"
                            link/>
                            Sign in
                        </Link>
                    </span>
                    <span>
                        <Link to = {"/signIn"} >
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

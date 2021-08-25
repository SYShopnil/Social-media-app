import React, {useEffect} from 'react'
import NProgress from 'react-nprogress'
import {useLocation} from 'react-router-dom'
import Random from '../Component/Random'


const HomePage = () => {
    const  location = useLocation()
    const {pathname} = location

    return (
        <div>
            <h1>hello i am from homepage</h1>
        </div>
    )
}

export default HomePage

import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const SignForm = () => {
    return(
        <div className="log-form">
            <div className="btn-div">
                <Link to="/register"><button className="log-buttons">Register</button></Link>
                <Link to="/login"><button className="log-buttons">Log in</button></Link>
            </div>
        </div>
    )
}

export default SignForm;
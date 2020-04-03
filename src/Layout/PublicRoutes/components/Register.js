import React, { useState } from 'react'
import { registerUser } from '../../../Services/CoetusService/Coetus'
import { useHistory } from 'react-router-dom'
import { setToken, setId } from '../../../Services/auth_service'

const Register = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setComfirmedPassword] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory();

    const handleRegister = () => {
        if(password === confirmPassword){
            registerUser(name, surname, username, password, email).then(res => {
                setToken(res.data.token);
                setId(res.data.user.user_id);
                history.push('/')
            })
        } else {
            alert(`Password doesn't match`)
        }
       
    }

    return (
        <div className="register-container log-form">
        <p>
            <input type='text' placeholder='Name' onInput={
                e => {
                    e.preventDefault();
                    setName(e.target.value)
                }}></input>
        </p>
        <p>
            <input type='text' placeholder='Surname' onInput={
                    e => {
                        e.preventDefault();
                        setSurname(e.target.value)
                    }}></input>
        </p>
        <p>
            <input type='text' placeholder='Username' onInput={
                e => {
                    e.preventDefault();
                    setUsername(e.target.value)
                }}></input>
        </p>
        <p>
            <input type='password' placeholder='Password' onInput={
                    e => {
                        e.preventDefault();
                        setPassword(e.target.value)
                    }}></input>
        </p>
        <p>
            <input type='password' placeholder='Confirm password' onInput={
                    e => {
                        e.preventDefault();
                        setComfirmedPassword(e.target.value)
                    }}></input>
        </p>
        <p>
            <input type='text' placeholder='e-mail' onInput={
                    e => {
                        e.preventDefault();
                        setEmail(e.target.value)
                    }}></input>
        </p>
        <p>
            <button className="log-buttons" type='button' onClick={
                    e => {
                        handleRegister();
                    }}>Register</button>
        </p>
        </div>
    )
}

export default Register 
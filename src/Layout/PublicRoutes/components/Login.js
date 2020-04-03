import React, { useState } from 'react';
import { loginUser } from '../../../Services/CoetusService/Coetus';
import { useHistory } from 'react-router-dom';
import { setToken, setId} from '../../../Services/auth_service';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleLogIn = () => {
       
        loginUser(username, password).then(res => {
            if(res.data.success) {
                setToken(res.data.token);
                setId(res.data.user.user_id);
                history.push('about')
            } else {
                alert('Log in failed.Try again!')
            }
           
        }).catch(err => alert('Wrong username or password'))
    }

    return(
        <div className="login-container log-form">
            <p>
            <input type='text' placeholder='Username' onInput={
                e => {
                    e.preventDefault();
                    setUsername(e.target.value)
                }}></input>
            </p>
            <p>
            <input type='text' placeholder='Password' onInput={
                e => {
                    e.preventDefault();
                    setPassword(e.target.value)
                }}></input>
            </p>
            <p>
                <button className="log-buttons" type='button' onClick={
                    e => {
                        handleLogIn();
                    }}>Log In</button>
            </p>
        </div>
    )
}

export default Login
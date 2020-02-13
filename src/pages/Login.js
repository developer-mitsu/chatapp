import React from 'react'
import { Link } from 'react-router-dom'

import { useInput } from '../lib' 

const Login = () => {
    const email = useInput('email', 'email')
    const password = useInput('password', 'password')

    return (
        <>
            <h1>Login</h1>        
            <form>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input {...email} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...password} />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link to="/signup">Sign Up</Link>
        </>
    )
}

export default Login
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../config/firebase'

import { useInput } from '../lib'

const SignUp = () => {
    const name = useInput('text', 'name')
    const email = useInput('email', 'email')
    const password = useInput('password', 'password')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(res => {
                console.log('User Created')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input {...name} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input {...email}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...password}/>
                </div>
                <button type="submit">SignUp</button>
            </form>
            <Link to="/login">Login</Link>
        </>
    )
}

export default SignUp
import React, { useState, useContext } from 'react'

import { AuthContext } from '../AuthService'

import firebase from '../config/firebase'

import { Redirect, Link } from 'react-router-dom'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // "ルートにリダイレクトする"
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            }) 
    }

    // ログイン済みユーザーを取得
    const user = useContext(AuthContext)
    
    // ログイン済みの場合、"/"へリダイレクト
    if (user) {
        return <Redirect to="/" />
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"></label>
                    <input 
                        type="email" 
                        id="email"
                        placeholder="email"
                        name="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input 
                        type="password" 
                        id="password"
                        placeholder="password"
                        name="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link to='/signup'>Sign Up</Link>
        </>
    )
}

export default Login
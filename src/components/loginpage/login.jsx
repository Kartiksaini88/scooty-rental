import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import './login.css'

export const Login = () => {
    
    const navigate = useNavigate()
    const { authin } = useContext(AuthContext)
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        const { email, password } = user
        if (email && password) {
            axios.post("https://bob-119.herokuapp.com/login", user)
                .then(res => (res.data.message == "Login Successfull" ? (navigate('/'), authin()) : alert("User Not found")))
        } else {
            alert("password doesn't match")
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="email" name='email' value={user.email} onChange={handleChange} placeholder="Enter your Email" />
            <input type="password" name='password' value={user.password} onChange={handleChange} placeholder="Enter your Password" />
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => { navigate('/register') }}>Rregister</div>
        </div>
    )
}
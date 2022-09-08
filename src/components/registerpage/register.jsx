import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import './register.css'

export const Register = () => {
    const { authin } = useContext(AuthContext)
    const navigate = useNavigate()
    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
        repassword: '',
    })
    // console.log(user)

    const handleChange = e => {
        const { name, value } = e.target
        setuser({
            ...user,
            [name]: value
        })
    }

    const register = (e) => {
        const { name, email, password, repassword } = user
        if (name && email && password && (password == repassword)) {
            axios.post('https://bob-119.herokuapp.com/register', user)
                .then(res => (res.data.message == "User Already registerd"?alert("User Already Exsited"):(authin(),navigate('/login'),alert("Successfully Registerd"))))
        } else {
            alert("password doesn't match")
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" value={user.name} placeholder="Enter your name" required={true} name="name" onChange={handleChange} />
            <input type="email" value={user.email} required={true} placeholder="Enter your email" name="email" onChange={handleChange} />
            <input type="password" value={user.password} required={true} placeholder="Enter your password" name="password" onChange={handleChange} />
            <input type="password" value={user.repassword} required={true} placeholder="Enter your password again" name="repassword" onChange={handleChange} />
            <div value={"Register"} className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => { navigate('/login') }}>Login</div>

        </div>
    )
}
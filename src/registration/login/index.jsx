import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from '../../components/custom-input';
import './style.scss'

const Login = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        const result = await axios.get(`https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/registerUser`)
        if (result.data) {
            const searchUser = result.data.find(x => x.email === user.email && x.password === user.password)
            if (searchUser) {
                localStorage.setItem('token-user', searchUser._id)
                window.location.reload()
            }
        }
    }
    return <section className="registration-section">
        <div className="auth-form-container">
            <h2>Log In</h2>


            <CustomInput label='Your E-mail'
                className='login-input'
                errorText='Input Your E-mail'
                name='email'
                value={user.email}
                placeholder="E-mail"
                onChange={handleChange} />
            <CustomInput
                type="password"
                label='Your Password'
                className='login-input'
                errorText='Input Your Password'
                name='password'
                value={user.password}
                placeholder="Password"
                onChange={handleChange} />
            <button onClick={handleSubmit} className="register-btn">Log In</button>

            {/* <button className="regist-link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button> */}
            <Link className="regist-link-btn" to='/registration'>Don't have an account? Register here</Link>
        </div>
    </section>
}
export default Login
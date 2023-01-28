import React from "react";
import { useState } from "react";
import CustomInput from '../../components/custom-input';
import './style.scss'

const Login = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return <section className="registration-section">
        <div className="auth-form-container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>

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
                <button type="submit" className="register-btn">Log In</button>
            </form>
            <button className="regist-link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    </section>
}
export default Login
import React from "react";
import { useState } from "react";
import CustomInput from '../../components/custom-input';
import './style.scss'

const Register = (props) => {

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
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <CustomInput label='Your First Name'
                    className='login-input'
                    errorText='Input Your First Name'
                    name='firstName'
                    value={user.firstName}
                    placeholder="First Name"
                    onChange={handleChange} />
                <CustomInput label='Your Last Name'
                    className='login-input'
                    errorText='Input Your Last Name'
                    name='lastName'
                    value={user.lastName}
                    placeholder="Last Name"
                    onChange={handleChange} />
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
            <button className="regist-link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log In here</button>
        </div>
    </section>
}
export default Register
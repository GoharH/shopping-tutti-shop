import React, { useState } from "react";
import AddressInfo from "../../components/address-info";
import './style.scss';
import CustomInput from "../../components/custom-input";


const Contact = () => {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
        setErrorMessage({ ...errorMessage, [e.target.name]: '' })
    }
    const validation = () => {
        let isValidate = true
        const newErrors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        if (!message.name.trim().length) {
            newErrors.name = 'Fill Your name'
            isValidate = false
        }
        if (!message.email.trim().length) {
            newErrors.email = 'Fill Your email'
            isValidate = false
        }
        if (!message.subject.trim().length) {
            newErrors.subject = 'Fill a subject'
            isValidate = false
        }
        if (!message.message.trim().length) {
            newErrors.message = 'Fill a message'
            isValidate = false
        }
        setErrorMessage(newErrors)
        return true
    }
    const handleConfirmClick = () => {
        if (validation()) {

            setMessage({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }
    }


    return <div className="contact-section">
        <div className="G-container">
            <div>
                <h1 className="G-page-title"> CONTACT US </h1>
                <div className="contact-main G-flex">
                    <div className="G-padding-50">
                        <div className="contact-input">
                            {/* <label>
                                <input type="text" name="name" value={message.name} placeholder="Your Name" onChange={handleChange} />
                            </label> */}
                            <CustomInput
                                error={!!errorMessage.name}
                                errorText={errorMessage.name}
                                className='input'
                                name={'name'}
                                value={message.name}
                                placeholder="Your Name"
                                onChange={handleChange} />
                            <CustomInput
                                error={!!errorMessage.email}
                                errorText={errorMessage.email}
                                name={'email'}
                                className='input'
                                value={message.email}
                                placeholder="Your Email"
                                onChange={handleChange} />
                            <CustomInput
                                error={!!errorMessage.subject}
                                errorText={errorMessage.subject}
                                name={'subject'}
                                className='input'
                                value={message.subject}
                                placeholder="Subject"
                                onChange={handleChange} />
                            <label>
                                <textarea type="text" name="message" value={message.message} placeholder="Message" onChange={handleChange} />
                                {errorMessage ? <p className="error-text">{errorMessage.message}</p> : null}
                            </label>
                            <button onClick={handleConfirmClick}>Send Message</button>
                        </div>
                    </div>
                    <div className="G-padding-50">
                        <div >
                            <div className="contact-map">
                                <iframe className="contact-map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92181.08836767173!2d11.170756490294842!3d43.779936659876775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d6ad%3A0x93d57917efc72a03!2z0KTQu9C-0YDQtdC90YbQuNGPLCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2s!4v1673203298413!5m2!1sru!2s" ></iframe>
                            </div>
                            <div className="contact-adress">
                                <AddressInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Contact
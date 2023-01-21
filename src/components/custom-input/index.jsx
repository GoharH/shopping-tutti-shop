import React from "react"
import './style.scss'
const CustomInput = ({ label, className, error, errorText, name, value, onChange, type = 'text', disabled, placeholder }) => {

    const handleChange = (e) => {
        onChange(e)
    }

    return <>
        <label>
            {label ? <p className="input-title " >{label}</p> : null}
            <input type={type} className={className} value={value} name={name} onChange={handleChange} disabled={disabled} placeholder={placeholder} />
            {/* {error ? className = "inpur-error" : className = 'input'} */}
            {error ? <p className="error-text">{errorText}</p> : null}
        </label>
    </>
}
export default CustomInput
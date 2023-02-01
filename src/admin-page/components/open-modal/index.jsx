import React from "react"
import './style.scss'

const Modal = ({ children, onClose }) => {
    return <div className="G-modal-container">
        <div className="G-modal-bg" onClick={onClose}></div>
        <div className="G-content-scroll">
            <div className="G-modal-content">
                {children}
            </div>
        </div>

    </div>
}
export default Modal
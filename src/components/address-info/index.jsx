import React from "react";
import './style.scss';

const AddressInfo = () => {
    return <>
        <div className="G-flex">
            <span className="icon icon-location"></span>
            <p className="icon-text">123 Street, Florence, Italy</p>
        </div>
        <div className="G-flex">
            <span className="icon icon-envelop"></span>
            <p className="icon-text">info@example.com</p>
        </div>
        <div className="G-flex">
            <span className="icon icon-phone1"></span>
            <p className="icon-text">+012 345 67890</p>
        </div>
    </>
}
export default AddressInfo
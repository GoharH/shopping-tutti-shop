import React from "react";
import AddressInfo from "../../components/address-info";
import './style.scss';

const Contact = () => {
    const handleChange = (e) => {

    }
    return <div className="contact-section">
        <div className="G-container">
            <div>
                <h1 className="G-page-title"> CONTACT US </h1>
                <div className="contact-main G-flex">
                    <div className="G-padding-50">
                        <div className="contact-input">
                            <label>
                                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
                            </label>
                            <label>
                                <input type="email" placeholder="Your Email" />
                            </label>
                            <label>
                                <input type="text" placeholder="Subject" />
                            </label>
                            <label>
                                <textarea type="text" placeholder="Message" />
                            </label>
                            <button>Send Message</button>
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
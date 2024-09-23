import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import {useState} from 'react'

import ContactUsImage from "../../assets/contact-us.png";
import "./ContactUs.css"

const ContactUs = ({id = ""}) => {
    const [form, setForm] = useState({name: "", email: "", message: ""});

    const handleFormInput = (event) => {
        const {id, value} = event.target;
        setForm((prev) => ({
            ...prev,
            [id]: value
        }))
    };

    const submitForm = (event) => {
        event.preventDefault();
    };

    return (
        <div id={id} className='cu-container' >
            <div className="cu-left-section">
                <h1 className="cu-text1">Contact Us</h1>
                <p className="cu-text2">we are here to work with you! feel free to contact us, whether you have questions, feedback, inquiries or want to work with us, our team is ready to help.</p>
                <form onSubmit={submitForm} className="cu-form">
                    <label htmlFor="name" className="cu-form-label" >Name</label>
                    <div className="cu-input-wrapper">
                        <Icon icon="iconamoon:profile" width={30} height={30} />
                        <input type="text" id='name' value={form.name} onChange={handleFormInput} className="cu-input" placeholder="Enter Your Name" />
                    </div>
                    <label htmlFor="e-mail" className="cu-form-label">E-mail</label>
                    <div className="cu-input-wrapper">
                        <Icon icon="iconoir:mail" width={30} height={30} />
                        <input type="text" id='email' value={form.email} onChange={handleFormInput} className="cu-input" placeholder="Enter Your E-mail" />
                    </div>
                    <div className="cu-message-wrapper" >
                        <label htmlFor="message" className="cu-form-label">Message</label>
                        <textarea type="text" id='message' value={form.message} onChange={handleFormInput} className="cu-input2" placeholder="Write Your Message" />
                    </div>
                    <button className="cu-form-button">
                        <p>Send Message</p>
                        <Icon icon="iconamoon:arrow-right-1" className="cu-form-button-icon" color="#ffffff" />
                    </button>
                </form>
            </div>
            <img src={ContactUsImage} alt="cu-image" className="cu-right-section-image" />
        </div>
    )
};

ContactUs.propTypes = {
    id: PropTypes.string
}

export default ContactUs
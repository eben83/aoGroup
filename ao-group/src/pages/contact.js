import React from "react";
import ContactForm from "../components/contactForm";
import ContactModal from "../components/contactModal";

const Contact = () => {
    return (
        <>
            <div className="w3-container" style={{padding:"128px 16px"}} id="contact">
                <h3 className="w3-center">Contact</h3>
                <p className="w3-center w3-large">Want to talk?</p>
            </div>
            <ContactForm /> 
            <ContactModal />      
        </>
    )
}

export default Contact
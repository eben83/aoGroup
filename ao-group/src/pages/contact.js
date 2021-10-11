import React, {useState} from "react";
import ContactForm from "../components/contactForm";
import ContactModal from "../components/contactModal";


const Contact = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModal = () => setIsModalOpen(!isModalOpen)
    

    return (
        <>
            <div className="w3-container" style={{padding:"100px 16px"}} id="contact">
                <h3 className="w3-center">Contact</h3>
                <p className="w3-center w3-large">Want to talk?</p>
            </div>
            <ContactForm
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
            /> 
            <ContactModal 
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
                // modalHeading={heading}
                // modalContent={content}
                isModalOpen={isModalOpen}
            />  
               
        </>
    )
}

export default Contact
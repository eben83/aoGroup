import React, {useState} from "react";
import ContactForm from "../components/contactForm";
import ContactModal from "../components/contactModal";
import Heading from "../components/heading";


const Contact = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModal = () => setIsModalOpen(!isModalOpen)
    

    return (
        <>
            <Heading title='Contact' text='Wana talk?'/>

            <ContactForm
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
            /> 
            <ContactModal 
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
            />  
               
        </>
    )
}

export default Contact
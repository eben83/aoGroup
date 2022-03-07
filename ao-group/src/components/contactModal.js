import React from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


const ContactModal = ({ toggleModal, isModalOpen }) => {

    return (
        <>
            <Modal isOpen={isModalOpen} toggle={toggleModal} >
                <ModalHeader >
                    <div onClick={toggleModal}>X</div>
                    <h2>Your data is:</h2>
                </ModalHeader>
                <ModalBody>
                    <div className='row align-items-center'>
                         <h1>this is a test</h1> 
                        
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}


export default ContactModal
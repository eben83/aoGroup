import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ContactModal = ({toggleModal, isModalOpen, modalHeading, modalContent}) => {
    return (
        <>
            <Modal isOpen={isModalOpen} 
                   toggle={toggleModal} 
            >
                <ModalHeader >
                    <div onClick={toggleModal}>X</div>
                    {modalHeading}
                </ModalHeader>
                <ModalBody toggle={toggleModal}>
                    <div className='row align-items-center'>
                        {modalContent}
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}
export default ContactModal
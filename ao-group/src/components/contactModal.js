import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useStateValue } from "../stateProvider";
import DisplayData from './displayData'


const ContactModal = ({toggleModal, isModalOpen, modalHeading, modalContent}) => {

    const [{content}] = useStateValue()
    return (
        <>
            <Modal isOpen={isModalOpen} toggle={toggleModal} >
                <ModalHeader >
                    <div onClick={toggleModal}>X</div>
                    <h2>Your data is:</h2>
                </ModalHeader>
                <ModalBody>
                    <div className='row align-items-center'>
                        {/* <h1>this is a test</h1> */}
                        {content
                        .filter(item => item.firstName && item.mobile && item.lastName !== undefined)
                        .map(item => (
                            <DisplayData 
                                firstName={item.firstName}
                                lastName={item.lastName}
                                mobile={item.mobile}/>
                        ))}
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}


export default ContactModal
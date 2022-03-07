import React from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {useSelector} from "react-redux";
import {selectFirstName, selectLastName, selectMobile} from "../features/contatct/contactSlice";
import DisplayData from "./displayData";


const ContactModal = ({ toggleModal, isModalOpen }) => {
    
    const firstName = useSelector(selectFirstName)
    const lastName = useSelector(selectLastName)
    const mobile = useSelector(selectMobile)

    return (
        <>
            <Modal isOpen={isModalOpen} toggle={toggleModal} >
                <ModalHeader >
                    <div onClick={toggleModal}>X</div>
                    <h2>Your data is:</h2>
                </ModalHeader>
                <ModalBody>
                    <div className='row align-items-center'>
                        <DisplayData
                            firstName={firstName}    
                            lastName={lastName}
                            mobile={mobile}
                        />
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}


export default ContactModal
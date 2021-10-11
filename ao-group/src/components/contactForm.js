import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useStateValue } from "../stateProvider";


const ContactForm = ({toggleModal, isModalOpen, firstName, lastName, mobile}) => {

    const [{ content }, dispatch] = useStateValue()

    const addToModalContent = ({firstName, lastName, mobile}) => {
        dispatch ({
            type: 'ADD_TO_MODAL',
            item : {
                firstName: firstName,
                lastName: lastName,
                mobile: mobile,
            }
        })
        if(firstName && lastName && mobile) {
            toggleModal()
        } 
    }



    return (
        <>
             <Formik 
                initialValues={{firstName: '', lastName: '', mobile: ''}}
                onSubmit={(data, {resetForm, dispatch}) => {
                    dispatch(addToModalContent(data))
                    resetForm();
                }}
            >

                {({values, handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-center'>
                        <div className='p-5'>
                            <div className='p-3'>
                                <Field 
                                    values={values.firstName} 
                                    type='input' 
                                    name='firstName' 
                                    placeholder='First Name' />
                            </div>
                            <div className='p-3'>
                                <Field 
                                    values={values.lastName} 
                                    type='input' 
                                    name='lastName' 
                                    placeholder='Last Name'/>
                            </div>
                            <div className='p-3 '>
                                <Field 
                                    values={values.mobile} 
                                    type='input' 
                                    name='mobile'
                                    placeholder='Mobile Number'/>
                            </div>
                            <button className='btn btn-primary' onClick={handleSubmit} >
                                Submit
                            </button>
                        </div>
                    </div>
                </Form>
            )}</Formik>
        </>
    )
}

export default ContactForm
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useStateValue } from "../stateProvider";


const ContactForm = ({toggleModal, isModalOpen, firstName, email, mobile}) => {

    const [{ content }, dispatch] = useStateValue()

    const addToModalContent = ({firstName, email, mobile}) => {
        dispatch ({
            type: 'ADD_TO_MODAL',
            item : {
                firstName: firstName,
                email: email,
                mobile: mobile,
            }
        })
    }


    return (
        <>
             <Formik 
                initialValues={{firstName: '', email: '', mobile: ''}}
                onSubmit={(data, {resetForm, dispatch}) => {
                    console.log("submit: ", data)
                    dispatch(addToModalContent(data))
                    resetForm();
                    
                }}
            >

                {({values, handleSubmit}) => (
                <Form onSubmit={handleSubmit, addToModalContent}>
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
                                    values={values.email} 
                                    type='email' 
                                    name='email' 
                                    placeholder='Email'/>
                            </div>
                            <div className='p-3 '>
                                <Field 
                                    values={values.mobile} 
                                    type='input' 
                                    name='mobile'
                                    placeholder='Mobile Number'/>
                            </div>
                            <div className='btn btn-primary' onClick={handleSubmit}>
                                Submit
                            </div>
                        </div>
                    </div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}</Formik>
        </>
    )
}

export default ContactForm
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import { updateContact } from "../features/contatct/contactSlice";


const ContactForm = ({toggleModal, isModalOpen }) => {

    const { firstName, lastName, mobile } = useSelector((state) => state.contact)
    const dispatch = useDispatch()
    // const [{ content }, dispatch] = useStateValue()

    const addToModalContent = ({firstName, lastName, mobile}) => {
        dispatch (updateContact())
        if(firstName && lastName && mobile) {
            toggleModal()
        } 
    }



    return (
        <>
             <Formik 
                initialValues={{firstName, lastName, mobile}}
                onSubmit={(data, {resetForm, dispatch}) => {
                //     dispatch(addToModalContent(data))
                //     resetForm();
                }}
            >

                {({values}) => (
                <Form>
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
                            <button type='button' className='btn btn-primary' onClick={() => dispatch(updateContact())} >
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
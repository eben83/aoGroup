import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';


const ContactForm = ({toggleModal, heading, content, isModalOpen}) => {
    return (
        <>
             <Formik 
                initialValues={{name: '', email: '', mobile: ''}}
                onSubmit={(data, {resetForm}) => {
                    console.log(data)
                    resetForm()
                }}
                validate={values => {
                    const errors = {}
                    if(!values.name || !values.email || !values.mobile) {
                        errors.name = "You must have a name?"
                        errors.email = "Required"
                        errors.mobile = "How will we chat?"
                    } else if(
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    )
                    {
                        errors.email = "invalid email"
                    }
                    return errors
                }}
            >
                {({values, handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-center'>
                        <div className='p-5'>
                            <div className='p-3'>
                                <Field 
                                    values={values.name} 
                                    type='input' 
                                    name='name' 
                                    placeholder='Full Name' />
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
                            <div className='btn btn-primary' onClick={toggleModal} >
                                Submit
                            </div>
                        </div>
                    </div>
                </Form>
            )}</Formik>
        </>
    )
}

export default ContactForm
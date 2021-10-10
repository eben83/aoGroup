import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
    return (
        <>
             <Formik 
                initialValues={{name: '', email: '', mobile: ''}}
                onSubmit={(data, {resetForm}) => {
                    console.log(data)
                    resetForm()
                }}
            >
                {({values, handleChange, handleBlur, handleSubmit}) => (
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
                            <div className='btn btn-primary d-flex justify-content-center' type='submit'onClick={handleSubmit}>Submit</div>
                        </div>
                    </div>
                         <pre>{JSON.stringify(values, null, 2)}</pre> {/* shows data on screen..  */}
                </Form>
            )}</Formik>
        </>
    )
}

export default ContactForm
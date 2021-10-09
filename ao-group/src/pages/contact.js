import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => {
    return (
        <>
            <div className="w3-container" style={{padding:"128px 16px"}} id="contact">
                <h3 className="w3-center">Contact</h3>
                <p className="w3-center w3-large">Want to talk?</p>
            </div>

            <Formik 
                initialValues={{name: '', email: '', mobile: ''}}
                onSubmit={(data, {resetForm}) => {
                    console.log(data)
                    resetForm()
                }}
            >
                {({values, handleChange, handleBlur, handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <div className='d-flex w3-center'>
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
                            <div className='p-3'>
                                <Field 
                                    values={values.mobile} 
                                    type='input' 
                                    name='mobile'
                                    placeholder='Mobile Number'/>
                            </div>
                            <div className='btn btn-primary' type='submit'onClick={handleSubmit}>Submit</div>
                        </div>
                    </div>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}</Formik>
        </>
    )
}

export default Contact
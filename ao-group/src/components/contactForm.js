import React, {} from 'react';
import { useFormik } from 'formik';
import { updateContact } from "../features/contatct/contactSlice";
import {useDispatch} from "react-redux";

const ContactForm = () => {
    
    const dispatch = useDispatch()

    const validate = values => {
        const errors = {}

        if(!values.firstName) {
            errors.firstName = 'Required'
        }
        else if (values.firstName.length > 15) {
            errors.firstName = "Must be less than 15 characters"
        }

        if(!values.lastName) {
            errors.lastName = 'Required'
        }
        else if (values.lastName.length > 15) {
            errors.lastName = "Must be less than 15 characters"
        }

        if(!values.mobile) {
            errors.mobile = 'Required'
        }
        else if (values.mobile.length !== 10) {
            errors.mobile = "Must be 10 characters"
        }
        return errors
    }
    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            mobile: '',
        },
        validate,
        
        onSubmit: values => {
            dispatch(updateContact(values))
        },
        
    });

    
    
    return (
        <form className='d-flex justify-content-center' onSubmit={formik.handleSubmit}>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-column'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? <div className='text-danger'>{formik.errors.firstName}</div> : null}

                </div>

                <div className='d-flex flex-column'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {formik.errors.lastName ? <div  className='text-danger'>{formik.errors.lastName}</div> : null}
                </div>

                <div className='d-flex flex-column'>
                    <label htmlFor="email">Mobile Number</label>
                    <input
                        id="mobile"
                        name="mobile"
                        type="mobile"
                        onChange={formik.handleChange}
                        value={formik.values.mobile}
                    />
                    {formik.errors.mobile ? <div  className='text-danger'>{formik.errors.mobile}</div> : null}
                </div>

                <button className='btn btn-primary mt-3' type="submit">Submit</button>
            </div>
        </form>
    );
};
export default ContactForm
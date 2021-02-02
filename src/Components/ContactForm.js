import { useEffect, useState } from "react";
import React  from 'react';

const ContactForm = (props) => {
 const initVal = {
     fullName :'',
     mobile :'',
     email :'',
     address :''

 }
 var [values,setValues] = useState(initVal) ;

 
 
 const handleInputChange = (event) => {
        var {name,value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
 }

 const handleFormSubmit = (event) => {
        //event.preventDefault();
        props.addorEdit(values);
 }
    return (
        <form autoComplete='off' onSubmit={handleFormSubmit}>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
                <input className='form-control' 
                placeholder='Full Name'
                value={values.fullName}
                name='fullName'
                onChange={handleInputChange} />
            </div>
            <div className='form-row'>
                <div className='form-group input-group col-md-6'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i className='fas fa-mobile-alt'></i>
                        </div>
                    </div>
                    <input className='form-control' 
                    placeholder='Mobile'
                    value={values.mobile}
                    name='mobile'
                    onChange={handleInputChange} />
                </div>

                <div className='form-group input-group col-md-6'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i className='fas fa-envelop'></i>
                        </div>
                    </div>
                    <input className='form-control' 
                    placeholder='Email'
                    value={values.email}
                    name='email'
                    onChange={handleInputChange} />
                </div>
               
            </div>
            <div className='form-group'>
                    <textarea className='form-control'
                     placeholder='Address' 
                    name='address'
                    value={values.address}
                    onChange={handleInputChange} />
                </div>

                <div className='form-group'>
                    <input type='submit' value='Save' className='btn btn-primary btn-block' />
                </div>
        </form>
    );
}

export default ContactForm;

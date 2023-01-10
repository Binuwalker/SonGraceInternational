import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './LoginSignin.css';
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import FormValidLogin from './Login';

const Signin = () => {

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [firstNameSuccess, setFirstNameSuccess] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [lastNameSuccess, setLastNameSuccess] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailSuccess, setEmailSuccess] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [phoneSuccess, setPhoneSuccess] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [success, setSuccess] = useState(false)

    const regexFirstNameLastName = /^[a-zA-Z ]{1,10}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPhone = /^[0-9]{10}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;

    const handleClick = () => {
        if (firstName.length === 0) {
            setFirstNameError('Please Enter your First Name')
            setFirstNameSuccess(false)
            setSuccess(false)
        } else if (!regexFirstNameLastName.test(firstName)) {
            setFirstNameError('Enter a valid Name')
            setFirstNameSuccess(false)
            setSuccess(false)
        } else {
            setFirstNameError(false)
            setFirstNameSuccess('Verified')
            setSuccess(true)
        }
        if (lastName.length === 0) {
            setLastNameError('Please Enter your Last Name')
            setLastNameSuccess(false)
            setSuccess(false)
        } else if (!regexFirstNameLastName.test(lastName)) {
            setLastNameError('Enter a valid Name')
            setLastNameSuccess(false)
            setSuccess(false)
        } else {
            setLastNameError(false)
            setLastNameSuccess('Verified')
            setSuccess(true)
        }
        if (email.length === 0) {
            setEmailError('Please Enter your Email Id')
            setEmailSuccess(false)
            setSuccess(false)
        } else if (!regexEmail.test(email)) {
            setEmailError('Enter a Valid Email')
            setEmailSuccess(false)
            setSuccess(false)
        } else {
            setEmailError(false)
            setEmailSuccess('Verified')
            setSuccess(true)
        }
        if (phone.length === 0) {
            setPhoneError('Please Enter your Phone Number')
            setPhoneSuccess(false)
            setSuccess(false)
        } else if (!regexPhone.test(phone)) {
            setPhoneError('Enter a Valid Number')
            setPhoneSuccess(false)
            setSuccess(false)
        }    
        else {
            setPhoneError(false)
            setPhoneSuccess('Verified')
            setSuccess(true)
        }
        if (password.length === 0) {
            setPasswordError('Please Enter a Password')
            setSuccess(false)
        } else if (!regexPassword.test(password)) {
            setPasswordError('Your Password Must Contain One Upper Case, Numeric, and a Special Character')
            setSuccess(false)
        } else {
            setPasswordError(false)
            setSuccess(true)
        }
        if (confirmPassword.length === 0) {
            setConfirmPasswordError('Please Enter a Password')
            setSuccess(false)
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('Password Does Not Match')
            setSuccess(false)
        } else {
            setConfirmPasswordError(false)
            setSuccess(true)
        }
    }

    return (
        <>
            {success ? (
                <FormValidLogin />
            ) : (
                <div className='signin-form-label-class'>
                    <Container>
                        <div className='signin-title'>
                            <h2>
                                Son Grace International Welcomes You!
                            </h2>
                        </div>
                        <div className='signin-form'>
                            <div className='signin-box-dummy-1'></div>
                            <div className='signin-box'>
                                <Container>
                                    <Form>
                                        <div className='signin-form-1'>
                                            <div className='form-1-width-first-name'>
                                                <Form.Label className='signin-first-name'>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control className='signin-first-name-input' type='text' placeholder='Enter Your First Name' onChange={e => setFirstName(e.target.value)} />
                                                <div className='signin-first-name-error'>{firstNameError}</div>
                                                <div className='signin-first-name-success'>{firstNameSuccess}</div>
                                            </div>
                                            <div className='form-2-width-last-name'>
                                                <Form.Label className='signin-last-name'>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control className='signin-last-name-input' type='text' placeholder='Enter Your Last Name' onChange={e => setLastName(e.target.value)} />
                                                <div className='signin-last-name-error'>{lastNameError}</div>
                                                <div className='signin-last-name-success'>{lastNameSuccess}</div>
                                            </div>
                                        </div>
                                        <div className='signin-form-2'>
                                            <div className='form-1-width-email'>
                                                <Form.Label className='signin-email'>
                                                    Email
                                                </Form.Label>
                                                <Form.Control className='signin-email-input' type='email' placeholder='Enter Your Email Id' onChange={e => setEmail(e.target.value)} />
                                                <div className='signin-email-error'>{emailError}</div>
                                                <div className='signin-email-success'>{emailSuccess}</div>
                                            </div>
                                            <div className='form-2-width-phone'>
                                                <Form.Label className='signin-phone-number'>
                                                    Phone Number
                                                </Form.Label>
                                                <Form.Control className='signin-phone-number-input' type='text' placeholder='Enter Your Phone Number' onChange={e => setPhone(e.target.value)} />
                                                <div className='signin-phone-error'>{phoneError}</div>
                                                <div className='signin-phone-success'>{phoneSuccess}</div>
                                            </div>
                                        </div>
                                        <div className='signin-form-3'>
                                            <div className='form-1-width-password'>
                                                <Form.Label className='signin-password'>
                                                    Password
                                                </Form.Label>
                                                <Form.Control className='signin-password-input' type='password' placeholder='Enter a Password' onChange={e => setPassword(e.target.value)} />
                                                <div className='signin-password-error'>{passwordError}</div>
                                            </div>
                                            <div className='form-2-width-confirm-password'>
                                                <Form.Label className='signin-confirm-password'>
                                                    Confirm Password
                                                </Form.Label>
                                                <Form.Control className='signin-confirm-password-input' type='password' placeholder='Enter the Password Again' onChange={e => setConfirmPassword(e.target.value)} />
                                                <div className='signin-confirm-password-error'>{confirmPasswordError}</div>
                                            </div>
                                        </div>
                                        <Button className='signin-btn btn-success' onClick={() => {
                                            handleClick();
                                        }} >
                                            Signin
                                        </Button>
                                        <div className='signin-external-links'>
                                            <button className='signin-apple'>Sign in with Apple <AiFillApple className='apple-2' /></button>
                                            <button className='signin-google'>Sign in with Google <FcGoogle className='google-2' /></button>
                                        </div>
                                    </Form>
                                </Container>
                            </div>
                            <div className='signin-box-dummy-2'></div>
                        </div>
                    </Container >
                </div >
            )}
        </>
    )
}

export default Signin
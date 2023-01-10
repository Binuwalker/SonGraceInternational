import React, { useRef, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './LoginSignin.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { TfiReload } from 'react-icons/tfi';
import { AiOutlineApple } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const FormValidLogin = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false)

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;

  const Navigate = useNavigate()

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  const handleClick = async () => {
    if (email.length === 0) {
      setEmailError("Please enter Your Email Id");
      setSuccess(false)
    } else if (!regexEmail.test(email)) {
      setEmailError("Please enter a valid Email Id");
      setSuccess(false)
    } else {
      setEmailError(false);
      setSuccess(true)
    }
    if (password.length === 0) {
      setPasswordError("Please enter the Password");
      setSuccess(false)
    } else if (!regexPassword.test(password)) {
      setPasswordError("Please enter a Valid Password")
      setSuccess(false)
    } else {
      setPasswordError(false)
      setSuccess(true)
    }
    console.log(email, password);
  }

  return (
    <>
      {success ? (
        <Container>
          <h1 className=' text-success'>Logged in successfully</h1>
          <button className='login-back-home-btn'><Link to='/' className='login-back-home'>Go to Home</Link></button>
        </Container>
      ) : (
        <div className='login-form-label-class'>
          <Container>
            <div className='login-titile'>
              <h2>
                Welcome You Again!
              </h2>
            </div>
            <div className='login-form'>
              <div className='login-box-dummy-1'></div>
              <div className='login-box'>
                <Container>
                  <div className='login-reload'>
                    <div className='login-reload-dummy'></div>
                    <div className='login-reload-icon'><TfiReload className='reload-ic' /></div>
                  </div>
                  <Form>
                    <Form.Label htmlFor='email' className='login-email'>
                      Email
                    </Form.Label>
                    <Form.Control
                      className='login-email-input'
                      type='email'
                      placeholder='Enter the Email Id'
                      ref={emailRef}
                      autoComplete="off"
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                    {!regexEmail.test(email) ?
                      (<div className='login-email-error'>{emailError}</div>
                      ) : (
                        <div className='login-email-error-false'></div>)}
                    <Form.Label htmlFor='password' className='login-password'>
                      Password
                    </Form.Label>
                    <Form.Control
                      className='login-password-input'
                      type='password'
                      placeholder='Enter Your Password'
                      ref={passwordRef}
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                      required />
                    {password.length < 8 ?
                      <div className='login-password-error'>{passwordError}</div> : <div className='login-password-error-false'></div>}
                  </Form>
                  <Button className='login-btn btn-info'
                    onClick={() => {
                      handleClick();
                    }
                    }>Login</Button>
                  <div className='login-negative'>
                    <div className='login-create-acc'>
                      <p className='create-acc' onClick={() => Navigate('/signin')}>Don't have an account?</p>
                    </div>
                    <div className='login-forget-password'>
                      <p className='forget-password'>Forget password?</p>
                    </div>
                  </div>
                  <div className='login-or'>Or</div>
                  <div className='login-external-links'>
                    <button className='login-apple'>
                      <AiOutlineApple className='apple' />
                    </button>
                    <button className='login-facebook'>
                      <FiFacebook className='facebook' />
                    </button>
                    <button className='login-instagram'>
                      <BsInstagram className='instagram' />
                    </button>
                    <button className='login-google'>
                      <FcGoogle className='google' />
                    </button>
                  </div>
                </Container>
              </div>
              <div className='login-box-dummy-2'></div>
            </div>
          </Container >
        </div >
      )}
    </>
  )
}

export default FormValidLogin;
import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const {displayName, email, password, confirmPassword} = credentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and confirm password does not match!');
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, { displayName });
      } catch(e) {
        console.error(e);
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({...credentials, [name]: value});
  };

  return (
    <div className='sign-up'>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display name' required autoComplete='off' />
        <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required autoComplete='off' />
        <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required autoComplete='off'/>
        <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confim password' required autoComplete='off'/>
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp

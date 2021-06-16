import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch(e) {
      console.error(e);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials({...userCredentials, [name]: value })
  };

  return (
    <div className="sign-in">
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name='email' autoComplete="on" type='email' value={email} handleChange={handleChange} label='Email' required />
        <FormInput name='password' autoComplete="on" type='password' value={password} handleChange={handleChange} label='Password' required />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

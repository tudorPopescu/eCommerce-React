import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

class SignInAndSignUp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='sign-in-and-sign-up'>
        <SignIn />
      </div>
    )
  }
}

export default SignInAndSignUp;
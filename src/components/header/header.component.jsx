import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

function signOut() {
  auth.signOut().then(() => null).catch(e => console.log(e));
}

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
        <div className='subtitle'>Tudor - eCommerce</div>
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
        {
          currentUser ? <div className='option' onClick={signOut}>SIGN OUT</div> : <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);

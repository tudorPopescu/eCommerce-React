import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, Options, OptionLink, Option } from './header.styles';

function signOut() {
  auth.signOut().then(() => null).catch(e => console.log(e));
}

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
        <div className='subtitle'>Tudor - eCommerce</div>
      </LogoContainer>

      <Options>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {
          currentUser ? <Option onClick={signOut}>SIGN OUT</Option> : <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </Options>
      {
        hidden ? null : <CartDropdown />
      }
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

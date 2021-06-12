import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const dollarsToCents = price * 100;
  const publishableKey = 'pk_test_51J1WLeA3xCsiBCIq6F47jYuporh66RP4b0gRdxNe0pWDz1Gf5RpnHab5MLaGPDskDsBj2CJ9ObfZwYsrKWCW18Hv00xKf2WbYz';

  const onToken = token => {
    console.info('Payment succeeded!', token);
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is: $${price}`}
      amount={dollarsToCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

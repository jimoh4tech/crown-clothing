import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51JDQBCEcKMi6VZK7lGfJ1GneVUeR5wSuReo7phEXFmtcCSGZqB354cJPcNL6IUcRYP8YgWw3KZtLOETKrC3FN2Kr00L9PkgS3b'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name="CROWN Clothing Ltd."
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;
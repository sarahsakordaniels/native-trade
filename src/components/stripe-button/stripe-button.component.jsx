import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    // stripe wants the price in cents
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_Tz9LGfiSSom3I29H99xcfmKz0085tU7ojq'

    const onToken = token => {
        alert('Payment Successful!')
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name= 'Native Trade'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
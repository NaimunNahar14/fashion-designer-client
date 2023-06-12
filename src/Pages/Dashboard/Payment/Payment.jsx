import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import useCart from '../../../Hooks/UseCart';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const { id } = useParams();
    console.log(id);
    const singleCart = cart.find((c) => c._id == id);
    // console.log(singleCart); // Corrected variable name
    return (
        <div>
            <h2>It is a payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm singleCart={singleCart} price={singleCart.price} />
            </Elements>
        </div>
    );
};

export default Payment;
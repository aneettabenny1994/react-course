import axios from 'axios';
import { useEffect, useState } from 'react';
import './CheckoutPage.css'
import { CheckoutHeader } from './CheckoutHeader'
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setpaymentSummary] = useState(null);
    useEffect(() => {
        axios.get('https://friendly-space-fishstick-r597pj9vw9q2rpv-3000.app.github.dev/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data)
            });
        axios.get('https://friendly-space-fishstick-r597pj9vw9q2rpv-3000.app.github.dev/api/payment-summary')
            .then((response) => {
                setpaymentSummary(response.data)
            });
    }, [])
    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="cart.png" />
            <CheckoutHeader />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>
                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}
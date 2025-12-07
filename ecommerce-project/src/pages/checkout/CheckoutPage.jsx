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
        const fetchCheckoutData = async () => {
            let response = await axios.get('https://bookish-space-memory-r597pj9v6vx3wjrp-3000.app.github.dev/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data)

            response = await axios.get('https://bookish-space-memory-r597pj9v6vx3wjrp-3000.app.github.dev/api/payment-summary');
            setpaymentSummary(response.data)
        }
        fetchCheckoutData();
    }, []);
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
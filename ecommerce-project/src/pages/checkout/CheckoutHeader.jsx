import './CheckoutHeader.css'

export function CheckoutHeader() {
    return (
            <div class="checkout-header">
                <div class="header-content">
                    <div class="checkout-header-left-section">
                    <a href="/">
                        <img class="logo" src="images/logo.png" />
                        <img class="mobile-logo" src="images/mobile-logo.png" />
                    </a>
                    </div>

                    <div class="checkout-header-middle-section">
                    Checkout (<a class="return-to-home-link"
                        href="/">3 items</a>)
                    </div>

                    <div class="checkout-header-right-section">
                    <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>
    );
}
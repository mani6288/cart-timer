# Abd_CartTimer

**Cart Timer (Urgency Plugin) for Magento 2**

This module adds a visible countdown timer on the cart page to create a sense of urgency for customers.
When the timer expires (default 20 minutes), the cart is automatically cleared.

## Features
- Countdown timer on the cart page
- Automatically clears cart after timer expires
- Lightweight and easy to install

## Installation

1. Upload the `Abd_CartTimer` folder to `app/code/Abd/CartTimer`
2. Run the following commands:

```bash
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush

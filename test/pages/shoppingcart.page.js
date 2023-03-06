import Page from './page.js';

class ShoppingCartPage extends Page {

    // 'Your Cart' header, used to detect nav to page
    get pageTitle() { return $('div.header_secondary_container span.title'); }

    // Cart list
    get cart() { return $('div#cart_contents_container div.cart-list'); }

    // Continue Shopping button
    get continueShoppingButton() { return $('button#continue-shopping'); }

    // Checkout button
    get checkoutButton() { return $('button#checkout'); }

    open() {
        super.open('cart.html');
    }

    // index starts at 1
    getCartItem(index) {

        return {
            'itemName': itemName,
            'quantity': quantity,
            'description': description,
            'price': price
        }
    }
}
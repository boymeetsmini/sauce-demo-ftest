import Page from './page.js';

class InventoryPage extends Page {

    get pageTitle() { return $('div.app_logo'); }
    get cartButton() { return $('a.shopping_cart_link'); }
    get cartQuantityBubble() { return this.cartButton.$('span.shopping_cart_badge'); }


    // hamburger menu
    get menuOpenButton() { return $('button#react-burger-menu-btn'); }
    get menuCloseButton() { return $('div.bm-cross-button'); }
    get menuAllItems() { return $('#inventory_sidebar_link'); }
    get menuAbout() { return $('#about_sidebar_link'); }
    get menuLogout() { return $('#logout_sidebar_link'); }

    open() {
        super.open('inventory.html');
    }

    async logout() {
        await this.menuOpenButton.click();
        await this.menuLogout.waitForDisplayed();
        await this.menuLogout.click();
    }

    async cartQuantity() {
        await this.cartQuantityBubble.waitForExist(10000);
        const qtyStr = await this.cartQuantityBubble.getText();
        return parseInt(qtyStr);
    }

    addToCartButton(itemName) {
        // convert item name to lowercase with dashes instead of spaces
        return $(`button#add-to-cart-${itemName.toLowerCase().split(' ').join('-')}`);
    }
}

export default new InventoryPage();
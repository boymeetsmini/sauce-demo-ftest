import Page from './page.js';

class InventoryPage extends Page {

    get pageTitle() { return $('div.app_logo'); }
    get cartButton() { return $(''); }
    get cartQuantityBubble() { return $(''); }

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
}

export default new InventoryPage();
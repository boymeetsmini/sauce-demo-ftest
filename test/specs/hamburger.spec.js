import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';

describe('Inventory page hamburger menu tests', function () {

    beforeEach(async function() {
        // login as standard_user
        loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.pageTitle.waitForDisplayed();
    });

    it('Open and close hamburger menu [SMOKE]', async function () {
        // open menu, ensure close button and all menu items are displayed
        await inventoryPage.menuOpenButton.click();
        await expect(inventoryPage.menuCloseButton).toBeDisplayed();
        await expect(inventoryPage.menuAbout).toBeDisplayed();
        await expect(inventoryPage.menuAllItems).toBeDisplayed();
        await expect(inventoryPage.menuLogout).toBeDisplayed();

        // close menu
        await inventoryPage.menuCloseButton.click();
        await expect(inventoryPage.menuOpenButton).toBeDisplayed();
    });

    afterEach(async function() {
        await inventoryPage.logout();
    });
});
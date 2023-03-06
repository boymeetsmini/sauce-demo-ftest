import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';

describe('Login tests', function () {
    // TEST DATA
    const correctPass = 'secret_sauce';
    const incorrectPass = 'secretsauce';
    const loginTests = [
        { user: 'standard_user' },
        { user: 'problem_user' },
        { user: 'performance_glitch_user' }
    ];

    beforeEach(function () {
        loginPage.open();
    });

    it('Should have correct page title', async function () {
        await expect(loginPage.pageTitle).toHaveText('Swag Labs');
    });

    it(`Login and logout`, async function() {
        await loginPage.login('standard_user', correctPass);
        await expect(inventoryPage.pageTitle).toBeDisplayed();
        await expect(browser).toHaveUrlContaining('inventory.html');

        await inventoryPage.logout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });

    it('Login as locked out user', async function () {
        await loginPage.login('locked_out_user', correctPass);
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    loginTests.forEach(async function ({user}) {
        it(`Login as ${user} with incorrect password`, async function () {
            await loginPage.login(user, incorrectPass);
            await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
        });
    });

    loginTests.forEach(async function ({user}) {
        it(`Login as ${user} with blank password`, async function () {
            await loginPage.login(user, '');
            await loginPage.errorMessage.waitForExist();
            await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        });
    });

    it('Login with correct credentials after entering blank and incorrect credentials', async function() {
        // login with blank password, clear error message
        await loginPage.login('standard_user', '');
        await loginPage.errorMessage.waitForExist();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        await loginPage.errorMessageCloseButton.click();

        // login with wrong password, clear error message
        await loginPage.login('standard_user', incorrectPass);
        await loginPage.errorMessage.waitForExist();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await loginPage.errorMessageCloseButton.click();

        // login with correct credentials, inventory page should load
        await loginPage.login('standard_user', correctPass);
        await expect(inventoryPage.pageTitle).toBeDisplayed();
        await expect(browser).toHaveUrlContaining('inventory.html');
    });
});
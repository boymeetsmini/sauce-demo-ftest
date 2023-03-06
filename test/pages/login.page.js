import Page from './page.js';

class LoginPage extends Page {

  // 'Swag Labs' title on login page
  get pageTitle() { return $('div.login_logo'); }

  // Username field
  get usernameInput() { return $('input#user-name'); }

  // Password field
  get passwordInput() { return $('input#password'); }

  // Login button
  get loginButton() { return $('input#login-button'); }

  // Red error message box that displays on incorrect/missing credentials
  get errorMessage() {
    const el = $('div.error');
    el.waitForExist();
    return el;
  }

  // Close button on error message box
  get errorMessageCloseButton() { return $('div.error button.error-button'); }

  // Accepted usernames list
  get acceptedUsernamesList() { return $('#login_credentials'); }

  // Password for all users
  get passwordForAllUsers() { return $('#login_password'); }

  open() {
    super.open('');
  }

  // password by default is correct one for all test users
  async login(username, password = 'secret_sauce') {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

export default new LoginPage();
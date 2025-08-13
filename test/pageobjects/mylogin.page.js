class Login {
  get username() { return $('[data-test="username"]'); }
  get password() { return $('[data-test="password"]'); }
  get loginBtn() { return $('[data-test="login-button"]'); }

  async open(path = '') {
    await browser.url(path); 
  }

  async login(user = 'standard_user', pass = 'secret_sauce') {
    await this.username.waitForDisplayed({ timeout: 5000 });
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
  }
}

export default new Login();

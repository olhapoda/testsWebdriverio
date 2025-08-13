import { remote } from 'webdriverio'
describe('Login Test With Wrong Password', () => {
  it('should warn about unsuccsessfull login', async () => {

await browser.url('https://www.saucedemo.com')

const toLogin = await browser.$('[data-test="username"]')
const toPassword = await browser.$('[data-test="password"]')
const clickLoginButton = await browser.$('[data-test="login-button"]')

await toLogin.setValue('standard_user')
await toPassword.setValue('unknownpassword')
await clickLoginButton.click()
 });
});


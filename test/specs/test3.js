import { remote } from 'webdriverio'
describe('Login Test With Wrong Username', () => {
  it('should warn about unsuccsessfull login', async () => {

await browser.url('https://www.saucedemo.com')

const toLogin = await browser.$('[data-test="username"]')
const toPassword = await browser.$('[data-test="password"]')
const clickLoginButton = await browser.$('[data-test="login-button"]')

await toLogin.setValue('standard_userA')
await toPassword.setValue('secret_sauce')
await clickLoginButton.click()
 });
});
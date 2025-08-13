import { remote } from 'webdriverio'
describe('Login Test', () => {
  it('should login successfully and move to next page', async () => {

await browser.url('https://www.saucedemo.com')

const toLogin = await browser.$('[data-test="username"]')
const toPassword = await browser.$('[data-test="password"]')
const clickLoginButton = await browser.$('[data-test="login-button"]')

await toLogin.setValue('standard_user')
await toPassword.setValue('secret_sauce')
await clickLoginButton.click()
const productsPage = await browser.$('.title')
    await productsPage.waitForDisplayed({ timeout: 5000 })
 });
});


import Login from '../pageobjects/mylogin.page.js'
describe('Login Test', () => {
  
  it('should login successfully and move to next page', async () => {

await Login.open()
await Login.login('standard_user', 'secret_sauce')

const productsPage = await browser.$('.title')
    await productsPage.waitForDisplayed({ timeout: 5000 })
    
 });
});


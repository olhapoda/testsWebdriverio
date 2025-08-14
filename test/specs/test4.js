import Login from '../pageobjects/mylogin.page.js'
describe('Logout Test', () => {
   beforeEach(async () => {
      await Login.open()
      await Login.login() 
    });
  it('should logout successfully', async () => {

const menuButton = await browser.$('.bm-burger-button')
const clickLogoutButton = await browser.$('[data-test="logout-sidebar-link"]')

await menuButton.click()
await clickLogoutButton.click()

 });
});
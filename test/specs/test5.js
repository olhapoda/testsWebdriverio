import Login from '../pageobjects/mylogin.page.js'

describe('Logout Test With Order', () => {
  beforeEach(async () => {
    await Login.open()
    await Login.login() 
  });

  it('should save the order option anyway', async () => {
    const addButton = await $('[data-test="add-to-cart-sauce-labs-backpack"]')
    const menuButton = await $('.bm-burger-button')
    const clickLogoutButton = await $('[data-test="logout-sidebar-link"]')
    
    await addButton.click();

    await menuButton.click();

    await clickLogoutButton.click()
  
    await Login.login();

    const productsHeading = await $('.title');
    await productsHeading.waitForDisplayed({ timeout: 5000 })
    await expect(productsHeading).toHaveText('Products')
  });
});

import Login from '/testask/test/pageobjects/login.js';

describe('Cart Button Test', () => {
  beforeEach(async () => {
    await Login.open();
    await Login.login();
  });

  it('shoudnt make an empty order', async () => {
    const cartButton = await browser.$('[data-test="shopping-cart-link"]')
    await cartButton.waitForClickable({ timeout: 5000 })
    await cartButton.click()
    const checkoutButton = await browser.$('[data-test="checkout"]')
    await checkoutButton.waitForClickable({ timeout: 5000 })
    await checkoutButton.click()
  });
});
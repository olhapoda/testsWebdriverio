import Login from '/testask/test/pageobjects/login.js';

describe('Cart Button Test', () => {
  beforeEach(async () => {
    await Login.open();
    await Login.login();
  });

  it('should not allow making an empty order', async () => {
    const cartButton = await $('[data-test="shopping-cart-link"]');
    await cartButton.waitForClickable({ timeout: 5000 });
    await cartButton.click();

    const checkoutButton = await $('[data-test="checkout"]');
    await checkoutButton.waitForClickable({ timeout: 5000 });
    await checkoutButton.click();

    const errorMessage = await $('[data-test="error-message"]');
    await expect(errorMessage).toBeDisplayed();
  });
});

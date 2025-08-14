import Login from '../pageobjects/mylogin.page.js'
import Cart from '../pageobjects/cart.page.js'

describe('Cart Button Test', () => {
  beforeEach(async () => {
    await Login.open();
    await Login.login();
  });

  it('should not allow making an empty order', async () => {
    await Cart.openCartAndCheckout();

    const errorMessage = await $('[data-test="error-button"]');
    await expect(errorMessage).toBeDisplayed();
    
  });
});

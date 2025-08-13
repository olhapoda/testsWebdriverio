import Login from '../pageobjects/mylogin.page.js'
import Chance from 'chance';

describe('Making An Order Test', () => {
  beforeEach(async () => {
    await Login.open();
    await Login.login();
  });

  it('should make an order successfully', async () => {
    const addToCartButton = await browser.$('[data-test="add-to-cart-sauce-labs-backpack"]')
    await addToCartButton.click()   
    const cartButton = await browser.$('[data-test="shopping-cart-link"]')
    await cartButton.click()
    const checkoutButton = await browser.$('[data-test="checkout"]')
    await checkoutButton.click()

    const chance = new Chance()
    const randomPostalCode = Math.floor(Math.random() * 90000) + 10000
    const firstName = await browser.$('[data-test="firstName"]')
    await firstName.waitForDisplayed({ timeout: 5000 })
    await firstName.setValue(chance.first())
    const lastName = await browser.$('[data-test="lastName"]')
    await lastName.setValue(chance.last())
    const postalCode = await browser.$('[data-test="postalCode"]')
    await postalCode.setValue(randomPostalCode)

    const continueButton = await browser.$('[data-test="continue"]')
    await continueButton.click()

    const finishButton = await browser.$('[data-test="finish"]')
    await finishButton.click()

    const backToButton = await browser.$('[data-test="back-to-products"]')
    await backToButton.click()
    });
});

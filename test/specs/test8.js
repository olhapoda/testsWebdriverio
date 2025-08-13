import Login from '/testask/test/pageobjects/login.js';
import Chance from 'chance';

describe('Making An Order Test', () => {
  beforeEach(async () => {
    await Login.open();
    await Login.login();
  });

  it('should make an order successfully', async () => {
    const addToCartButton = await browser.$('[data-test="add-to-cart-sauce-labs-backpack"]')
    await addToCartButton.waitForClickable({ timeout: 5000 })
    await addToCartButton.click()   
    const cartButton = await browser.$('[data-test="shopping-cart-link"]')
    await cartButton.waitForClickable({ timeout: 5000 })
    await cartButton.click()
    const checkoutButton = await browser.$('[data-test="checkout"]')
    await checkoutButton.waitForClickable({ timeout: 5000 })
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
    await continueButton.waitForClickable({ timeout: 5000 })
    await continueButton.click()

    const finishButton = await browser.$('[data-test="finish"]')
    await finishButton.waitForClickable({ timeout: 5000 })
    await finishButton.click()

    const backToButton = await browser.$('[data-test="back-to-products"]')
    await backToButton.waitForClickable({ timeout: 5000 })
    await backToButton.click()
    });
});

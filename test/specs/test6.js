import Login from './login.js';

describe('Sorting Options Test', () => {
  beforeEach(async () => {
    await Login.open()
    await Login.login() 
  });

  it('should show sorting options correctly', async () => {
    const select = await $('[data-test="product-sort-container"]')
    await select.waitForDisplayed({ timeout: 5000 })

    const options = await select.$$('option')

    for (const option of options) {
      const label = await option.getText()           
      await select.selectByVisibleText(label)          
      const firstItem = await $('.inventory_item_name')
      await firstItem.waitForDisplayed({ timeout: 5000 })
    
    }
  });
});

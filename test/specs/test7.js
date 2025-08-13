import Login from './login.js';

describe('Social Media Buttons Test', () => {
  beforeEach(async () => {
    await Login.open();
    await Login.login();
  });

  it('should open each social link and return correctly', async () => {
  const socials = await $('.social').$$('li');
  for (const item of socials) {
    const link = await item.$('a');
    const href = await link.getAttribute('href');

    const parentHandle = await browser.getWindowHandle();
    await link.click();

    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length > 1,
      { timeout: 5000, timeoutMsg: 'New window did not open' }
    );

    const handles = await browser.getWindowHandles();
    const newHandle = handles.find(h => h !== parentHandle);

    await browser.switchToWindow(newHandle);
    await expect(browser).toHaveUrl(href);

    await browser.pause(2000);

    await browser.closeWindow();
    await browser.switchToWindow(parentHandle);
  }
});
});

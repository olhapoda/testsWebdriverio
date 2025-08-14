class Cart {
  get cartButton() { return $('[data-test="shopping-cart-link"]'); }
  get checkoutButton() { return $('[data-test="checkout"]'); }

  async openCartAndCheckout() {
    await this.cartButton.click();
    await this.checkoutButton.click();
  }
}

export default new Cart();

import { type Page, type Locator, expect } from '@playwright/test';

export class CartPage {

  produit2: Locator;
  produit3: Locator;
  produit4: Locator;
  produit7: Locator;
  produit8: Locator;
  addToCartButton: Locator;
  backLink: Locator;


  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.produit2 = this.page.getByTestId('product-card-2');
    this.produit3 = this.page.getByTestId('product-card-3');
    this.produit4 = this.page.getByTestId('product-card-4');
    this.produit7 = this.page.getByTestId('product-card-7');
    this.produit8 = this.page.getByTestId('product-card-8');
    this.addToCartButton = this.page.getByTestId('product-detail-add-to-cart');
    this.backLink = this.page.getByTestId('product-detail-back-link');

  }
  
  async completeCartTest() {
    await this.produit2.click(); 
    await this.addToCartButton.click();
    await this.backLink.click();

    await this.produit3.click();
    await this.addToCartButton.click();
    await this.backLink.click();

    await this.produit4.click();
    await this.addToCartButton.click();
    await this.backLink.click();

    await this.produit8.click();
    await this.addToCartButton.click();
    await this.backLink.click();

    await this.page.getByTestId('nav-link-home').click();
    await this.produit7.click();
    await this.addToCartButton.click();
    
    await this.page.getByTestId('cart-button').click();
    await this.page.getByTestId('remove-item-3').click();
    await this.page.getByTestId('decrease-quantity-8').click();
    await this.page.getByTestId('increase-quantity-7').click();
  }
}
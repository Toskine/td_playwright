import { type Page, type Locator, expect } from '@playwright/test';

export class CatalogPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkFilters() {
  await this.page.getByTestId('nav-link-products').click();
  await this.page.getByRole('button', { name: 'Filtres' }).click();
  await this.page.getByRole('button', { name: 'Accessoires' }).click();
  await this.page.getByRole('button', { name: '100€ - 200€' }).click();
  await this.verifyMultipleProducts();
  }

  async verifyMultipleProducts() {
    const products = this.page.locator('[data-testid^="product-card-"]');
    expect(await products.count()).toBeGreaterThan(1);
  }
}
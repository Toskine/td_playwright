import { type Page, type Locator, expect } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkPageExists() {

    await this.page.getByTestId('nav-link-home').click();
    expect(this.page.getByRole('heading', { name: 'La technologie qui simplifie' })).toBeVisible();
    await this.page.getByTestId('nav-link-products').click();
    expect(this.page.getByRole('heading', { name: 'Notre Catalogue' })).toBeVisible();
    await this.page.getByTestId('nav-link-about').click();
    expect(this.page.getByRole('heading', { name: 'À propos de TechHub' })).toBeVisible();
    await this.page.getByTestId('nav-link-contact').click();
    expect(this.page.getByRole('heading', { name: 'Nous Contacter' })).toBeVisible();
    await this.page.getByTestId('cart-button').click();
    //await this.page.getByTestId('user-menu-button').click();
    //await this.page.getByTestId('account-link').click();
    //expect(this.page.getByRole('heading', { name: 'Mon Compte' })).toBeVisible();

  }
} 
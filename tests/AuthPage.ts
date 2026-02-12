import { type Page, type Locator, expect } from '@playwright/test';

export class AuthPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createAccount(email: string, pass: string, name: string) {
    await this.page.getByTestId('signup-tab').click();
    await this.page.locator('#signup-name').fill(name);
    await this.page.locator('#signup-email').fill(email);
    await this.page.locator('#signup-password').fill(pass);
    await this.page.locator('#signup-confirm').fill(pass);
    await this.page.getByTestId('signup-submit-button').click();
    await expect(this.page.getByRole('heading', { name: 'La technologie qui simplifie' })).toBeVisible();
  }
}
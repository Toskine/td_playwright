import { type Page, type Locator, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.locator('#login-email').fill(email);
    await this.page.locator('#login-password').fill(password);
    await this.page.getByTestId('login-submit-button').click();
    await expect(this.page.getByRole('heading', { name: 'La technologie qui simplifie votre quotidien' })).toBeVisible();
  }
}
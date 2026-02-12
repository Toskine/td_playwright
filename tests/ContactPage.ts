import { type Page, type Locator, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class ContactPage {
  readonly page: Page;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.submitButton = this.page.getByRole('button', { name: 'Envoyer le message' });
  }

  async sendMessage() {
    await this.page.getByTestId('nav-link-contact').click();
    await this.page.locator('#name').fill(faker.person.fullName());
    await this.page.locator('#email').fill(faker.internet.email());
    await this.page.locator('#subject').fill(faker.lorem.sentence());
    await this.page.locator('#message').fill(faker.lorem.paragraph());
    await this.submitButton.click();
    await expect(this.page.getByText('Message envoyé ! Nous vous répondrons sous 24h.')).toBeVisible();
  }
}
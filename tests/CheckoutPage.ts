import { type Page, type Locator, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class CheckoutPage {
  readonly page: Page;

  checkoutButton: Locator;
  shippingSubmitButton: Locator;
  paymentSubmitButton: Locator;
  firstName: Locator;
  lastName: Locator;
  email: Locator;
  phone: Locator;
  address: Locator;
  city: Locator;
  postalCode: Locator;
  cardNumber: Locator;
  cardName: Locator;
  expiry: Locator;
  cvv: Locator;


  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = this.page.getByTestId('checkout-button');
    this.shippingSubmitButton = this.page.getByTestId('shipping-submit-button');
    this.paymentSubmitButton = this.page.getByTestId('payment-submit-button');
    this.firstName = this.page.locator('#firstName');
    this.lastName = this.page.locator('#lastName');
    this.email = this.page.locator('#email');
    this.phone = this.page.locator('#phone');
    this.address = this.page.locator('#address');
    this.city = this.page.locator('#city');
    this.postalCode = this.page.locator('#postalCode');
    this.cardNumber = this.page.locator('#cardNumber');
    this.cardName = this.page.locator('#cardName');
    this.expiry = this.page.locator('#expiry');
    this.cvv = this.page.locator('#cvv');
  }

  async fillShippingDetails() {
    await this.checkoutButton.click();
    await this.firstName.fill(faker.person.firstName());
    await this.lastName.fill(faker.person.lastName());
    await this.email.fill(faker.internet.email());
    await this.phone.fill(faker.string.numeric(10));
    await this.address.fill(faker.location.streetAddress());
    await this.city.fill(faker.location.city());
    await this.postalCode.fill(faker.location.zipCode());
    await this.shippingSubmitButton.click();
  }

  async fillPaymentDetailsAndConfirmOrder() {
    await this.cardNumber.fill(faker.finance.creditCardNumber('################'));
    await this.cardName.fill(faker.person.fullName());
    const futureDate = faker.date.future();
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const year = String(futureDate.getFullYear()).slice(-2);
    await this.expiry.fill(`${month}/${year}`);
    await this.cvv.fill(faker.finance.creditCardCVV());
    await this.paymentSubmitButton.click();
    await expect(this.page.getByRole('heading', { name: 'Commande confirmée !' })).toBeVisible();
  }
}
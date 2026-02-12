import { test, expect } from '../tests/fixture/pomFixture';
import { faker } from '@faker-js/faker';

test.describe('E2E User Journey', () => {
  
  test('Complete purchase: Selection -> Cart -> Account -> Checkout', async ({ 
    authPage, 
    checkoutPage,
    cartPage,
  }) => {

    await test.step('1. Navigation and Account Creation', async () => {
      await authPage.page.goto("/auth");
      
      //const password = process.env.TEST_PASSWORD || 'Password123!';

      const email = faker.internet.email();
      const password = faker.string.alphanumeric(12);
      const name = faker.person.fullName();
      
      await authPage.createAccount(email, password, name);
    });

    await test.step('2. Add to cart', async () => {
      await cartPage.completeCartTest();
    });

    await test.step('3. Checkout and Payment', async () => {
      await checkoutPage.fillShippingDetails();
      await checkoutPage.fillPaymentDetailsAndConfirmOrder();
    });
  });
});
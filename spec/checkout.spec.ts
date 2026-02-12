import { test } from '../tests/fixture/pomFixture';

test.describe('Payment and Shipping', () => {
  test('Checkout process', async ({ authPage, cartPage, checkoutPage }) => {
    await authPage.page.goto('/auth');
    await authPage.createAccount(`user_${Date.now()}@test.com`, 'Password123!', 'Jean Dupont');
    await cartPage.completeCartTest();
    await checkoutPage.fillShippingDetails();
    await checkoutPage.fillPaymentDetailsAndConfirmOrder();
  });
});
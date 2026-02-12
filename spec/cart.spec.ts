import { test } from '../tests/fixture/pomFixture';

test.describe('Cart Functionality', () => {
  test('Cart management (Add/Remove/Quantity)', async ({authPage, cartPage }) => {
    await authPage.page.goto('/');
    
    await cartPage.completeCartTest();
  });
});
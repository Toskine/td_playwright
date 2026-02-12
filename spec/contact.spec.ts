import { test } from '../tests/fixture/pomFixture';

test.describe('Contact and Support', () => {
  test('Submit contact form', async ({ contactPage }) => {
    await contactPage.page.goto('/');
    
    await contactPage.sendMessage();
  
  });
});
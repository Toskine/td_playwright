import { test } from '../tests/fixture/pomFixture';

test.describe('', () => {
  test('Verify main pages presence', async ({ loginPage }) => {
    await loginPage.page.goto('/auth');

    const email = 'votre@email.com';
    const password = 'test1234';

    await loginPage.login(email, password);
    
  });
});
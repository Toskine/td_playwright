import { test } from '../tests/fixture/pomFixture';

test.describe('Navigation and Structure', () => {
  test('Verify main pages presence', async ({ navigationPage }) => {
    await navigationPage.page.goto('/');

    await navigationPage.checkPageExists();
    
  });
});
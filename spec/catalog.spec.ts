import { expect, test } from '../tests/fixture/pomFixture';

test.describe('Product Catalog', () => {
  test('Filter by category and price', async ({ catalogPage }) => {
    await catalogPage.page.goto('/');

    await catalogPage.checkFilters();
  });
});
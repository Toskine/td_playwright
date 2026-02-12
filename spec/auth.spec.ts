import { test } from '../tests/fixture/pomFixture';
import { faker } from '@faker-js/faker';

test.describe('Authentication', () => {
  test('User account creation', async ({ authPage }) => {
    
    await authPage.page.goto('/auth');
    
    const email = faker.internet.email();
    const password = faker.string.alphanumeric(12);
    const name = faker.person.fullName();

    await authPage.createAccount(email, password, name);

  });
});
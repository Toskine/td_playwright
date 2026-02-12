import { test as base } from '@playwright/test';
import { AuthPage } from '../AuthPage';
import { CheckoutPage } from '../CheckoutPage';
import { ContactPage } from '../ContactPage';
import { CartPage } from '../CartPage';
import { CatalogPage } from '../CatalogPage';
import { NavigationPage } from '../NavigationPage';
import { LoginPage } from '../Login';

type MyFixtures = {
  authPage: AuthPage;
  checkoutPage: CheckoutPage;
  contactPage: ContactPage;
  cartPage: CartPage;
  catalogPage: CatalogPage;
  navigationPage: NavigationPage;
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  catalogPage: async ({ page }, use) => {
      await use(new CatalogPage(page));
    }, 
  navigationPage: async ({ page }, use) => 
    {await use(new NavigationPage(page)); 
    },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
    }
});

export { expect } from '@playwright/test';
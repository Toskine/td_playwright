import { test, expect } from '@playwright/test';

test.describe('Technical Tests (Network)', () => {

  test('Performance: Load without images', async ({ page }) => {
    // Intercepte toutes les images et annule la requête
    await page.route('**/*.{png,jpg,jpeg,svg}', route => route.abort());

    await page.goto('/products');
    
    const images = await page.locator('img').all();
    console.log(`Nombre d'images non chargées : ${images.length}`);
  });

});
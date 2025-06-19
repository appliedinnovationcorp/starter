import { test, expect } from '@playwright/test';

test('home page displays greeting', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByText('Hello, World!')).toBeVisible();
});
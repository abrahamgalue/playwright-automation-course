import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');

  await page.locator('body').click()
  await page.locator('#title').click()
  await page.locator('p.mb-0').click()
  await page.locator('.blockquote-footer').click()

  await page.locator('a').filter({ hasText: 'Dynamic ID' }).click()

  // await page.getByRole('heading', { name: 'UI Test Automation Playground' }).click();
  // await page.getByRole('link', { name: 'Resources' }).click();
  // await page.getByRole('link', { name: 'Home' }).click();
  // await page.getByRole('link', { name: 'Click' }).click();
  // await page.getByRole('heading', { name: 'Click' }).click();
});
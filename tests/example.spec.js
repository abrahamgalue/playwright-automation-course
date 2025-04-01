import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fluid0.vercel.app/');
  await page.getByRole('button', { name: 'Send Request' }).click();
  await page.getByRole('button', { name: 'Send Request' }).dblclick();
  await page.getByRole('checkbox', { name: 'Fluid' }).click();
  await page.getByRole('checkbox', { name: 'Serverless' }).click();
  await page.getByRole('button', { name: 'Send Request' }).click();
  await page.getByRole('checkbox', { name: 'Server', exact: true }).click();
  await page.getByRole('checkbox', { name: 'Serverless' }).click();
  await page.getByRole('button', { name: 'Send Request' }).click();
  await page.getByRole('button', { name: 'Send Request' }).dblclick();
  await page.getByRole('button', { name: 'Send Request' }).click();
  await page.getByRole('checkbox', { name: 'Serverless' }).click();
  await page.getByRole('checkbox', { name: 'Fluid' }).click();
  await page.getByRole('button', { name: 'Send Request' }).click();
  await page.getByRole('button', { name: 'Send Request' }).dblclick();
});
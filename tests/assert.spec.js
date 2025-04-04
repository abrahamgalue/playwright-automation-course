import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');

  // verify input is visible
  await expect(page.getByRole('textbox')).toBeVisible()

  // select input and fill with user text
  await page.getByRole('textbox', { name: 'Set New Button Name' }).fill('Chanchito feliz')

  // click in button
  await page.getByRole('button', { name: 'Button That Should Change it\'s Name Based on Input Value' }).click()

  // verify button text updated
  await expect(page.getByRole('button', { name: 'Chanchito feliz' })).toBeVisible()
});
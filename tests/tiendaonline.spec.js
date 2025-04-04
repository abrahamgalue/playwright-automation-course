import {  describe, beforeEach, test, expect } from '@playwright/test'

const URL = 'https://www.automationexercise.com/'
const PRODUCT_QUANTITY = '3'

describe('E-commerce site tests', () => {
  beforeEach(async ({ page }) => {
    await page.goto(URL)
    await page.getByRole('link', { name: ' Products' }).click()
  })

  test('should navigate to products page', async ({ page }) => {
    await expect(page).toHaveTitle(/Products/)
  })

  test('should view product details', async ({ page }) => {
    await page.getByRole('link', { name: /View Product/ }).nth(1).click()

    await expect(page).toHaveURL(/product_details/)
  })

  test('should add product to cart', async ({ page }) => {
    await page.getByRole('link', { name: /View Product/ }).nth(1).click()

    await page.getByRole('spinbutton', { exact: 'quantity' }).fill(PRODUCT_QUANTITY)
    await page.getByRole('button', { name: ' Add to cart' }).click()

    await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible()

    await page.getByRole('button', { name: 'Continue Shopping' }).click()
    await expect(page.getByRole('heading', { name: 'Added!' })).not.toBeVisible()
  })
})
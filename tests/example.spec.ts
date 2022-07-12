import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("http://demowebshop.tricentis.com/login");
});

test.describe('Log in with incorrect data', () => {
  test('should allow me to add todo items', async ({ page }) => {
    const unsuccessfulMessage = "Login was unsuccessful. Please correct the errors and try again. No customer account found";


    await page.locator('#Email').fill("dsadsad@mail.ru");
    await page.locator('#Password').fill("dsadsadsad");
    await page.locator("//input[@value='Log in']").click();

    await expect(page.locator('div[class="validation-summary-errors"]')).toHaveText(unsuccessfulMessage);
  });
});

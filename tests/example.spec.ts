import {expect, type Page, test} from '@playwright/test';
import {allure} from "allure-playwright"

test.beforeEach(async ({page}) => {
    await page.goto("http://demowebshop.tricentis.com/login");
});

test.describe('Log in with incorrect data', () => {
    test('should allow me to add todo items', async ({page}) => {
        allure.severity("critical")
        allure.owner("RapDog")
        allure.link({url: 'http://demowebshop.tricentis.com/', name: 'Staging'})
        allure.issue({url: 'Jira', name: "Bug #1"})
        allure.feature("Authentication feature")
        allure.story("Log in as a user")


        const unsuccessfulMessage = "Login was unsuccessful. Please correct the errors and try again. No customer account found";
        const email = "dsadsad@mail.ru";
        const password = "dsadsadsad";

        await test.step(`Type email:${email}`, async () => {
            await page.locator('#Email').fill(email);
        });

        await test.step(`Type password:${password}`, async () => {
            await page.locator('#Password').fill(password);
        });


        await test.step("Click Log in button", async () => {
            await page.locator("//input[@value='Log in']").click();
        });

        await test.step("Verify error message is displayed", async () => {
            await expect(page.locator('div[class="validation-summary-errors"]')).toHaveText(unsuccessfulMessage);
        });

    });
});
